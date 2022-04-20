import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

import "./styles.css";

// parametrização
type Props = {
  pageCount: number;
  range: number; // para o pageRangeDisplayed
 // onChange: (pageNumber: number) => void;
};

const Pagination = ({ pageCount, range }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount} //  pageCount={5}
      pageRangeDisplayed={range} // pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"

     // onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}

      previousLabel={<ArrowIcon />}
      nextLabel={<ArrowIcon />}
    />
  );
};

export default Pagination;
