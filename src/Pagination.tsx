import React from 'react';


interface PropsType  {
  total: number;
  perPage: number;
  handleActivePage: (e: React.MouseEvent<HTMLAnchorElement>, numberPage: number) => void;
  page: number;
  nextPage: (e: React.ChangeEvent<unknown>) => void;
  prevPage: (e: React.ChangeEvent<unknown>) => void;
}

export const Pagination = ({total, perPage, handleActivePage, page, nextPage, prevPage}: PropsType) => {
  const totalPages = Math.ceil(total/perPage)
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1)
  const withInfoStart = page === 1 ? page : page * perPage - perPage + 1;
  const withInfoEnd = withInfoStart + perPage - 1;

  return (
    <>
      <p>{`${withInfoStart}-${(withInfoEnd > total ? total : withInfoEnd)} of ${total}`}</p>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={page === 1 ? "page-item disabled" : "page-item"}>
            <a
              onClick={(e: React.ChangeEvent<unknown>) => prevPage(e)}
              className="page-link"
              href="https://"
            >
              Previous
            </a>
          </li>
          {paginationArray.map(pageNumber =>
            <li key={pageNumber} className={pageNumber === page ? "page-item active" : "page-item" }>
              <a
                onClick={(e) => handleActivePage(e, pageNumber)}
                className="page-link" href="https://"
              >
                {pageNumber}
              </a>
            </li>)}
          <li className={page === totalPages ? "page-item disabled" : "page-item"}>
            <a
              onClick={e => nextPage(e)}
              className="page-link disabled"
              href="https://"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
