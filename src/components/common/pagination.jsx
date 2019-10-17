// import React, { Component } from "react";

// class Pagination extends Component {
//   render() {
//     const { itemCount, onPageChange, pageSize } = this.props;
// const NumberOfPage = itemCount / pageSize;
// let pageNumber = [];
// for (let i = 1; i <= NumberOfPage; i++) {
//   pageNumber.push(i);
// }
// console.log(pageNumber);
//     return (
//       <nav>
//         <ul className="pagination">
//           {/* {pageNumber.map(page => ( */}
//           <li className="page-item">
//             <a className="page-link">{pageNumber}</a>
//           </li>
//           {/* ))} */}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Pagination;

import React from "react";

const Pagination = ({ itemsCount, onPageChange, currentPage, pageSize }) => {
  // console.log(currentPage); debug purpose
  const NumberOfPage = itemsCount / pageSize;
  if (NumberOfPage < 1) return null;
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(NumberOfPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
