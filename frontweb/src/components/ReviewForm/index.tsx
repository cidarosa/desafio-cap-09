import { AxiosRequestConfig } from "axios";
import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import { Review } from "types/review";
import { requestBackend } from "util/requests";
import { toast } from "react-toastify";

import "./styles.css";

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};


const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Review>();

  const onSubmit = (formData: Review) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data: formData,
      withCredentials: true,
    };
    requestBackend(config)
      .then((response) => {
        setValue("text", "");
        onInsertReview(response.data);
        toast.info("Review cadastrado com sucesso!");
        // console.log("SUCESSO AO SALVAR", response);
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar Review");
        // console.log("ERROR AO SALVAR", error);
      });
  };

  return (
    <div className="base-card review-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("text", {
              required: "Campo requerido",
            })}
            type="text"
            name="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
          />
          <div className="invalid-feedback d-block">{errors.text?.message}</div>
        </div>
        <div className="review-submit">
          <ButtonIcon text="SALVAR AVALIAÇÃO" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
