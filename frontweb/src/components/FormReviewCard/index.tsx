import ButtonIcon from "components/ButtonIcon";


type FormData = {
    text: string;
}

const FormReviewCard = () => {

    return (
        <div className="base-card review-card">

            <form >
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control base-input"
                        placeholder="Deixe sua avaliação aqui"
                    />
                </div>
                <div className="review-submit">
                    <ButtonIcon text="SALVAR AVALIAÇÃO"/>
                </div>
            </form>
        </div>
    );
};

export default FormReviewCard;