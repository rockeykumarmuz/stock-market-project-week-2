interface PaginationProps {
  pageIndex: number
  totalPage: number
  startIndex: number
  endIndex: number
  handlePrevPage: () => void
  handleNextPage: () => void
}

const Pagination: React.FC<PaginationProps> = ({pageIndex, totalPage, startIndex, endIndex, handleNextPage, handlePrevPage
}) => {

  return (
    <div>
      <button disabled={pageIndex<=0} onClick={handlePrevPage}>Prev</button>
      <span style={{ margin: "0 10px" }}>
        Page {pageIndex + 1} of {totalPage}
      </span>
      <button disabled={pageIndex >= totalPage - 1} onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default Pagination
