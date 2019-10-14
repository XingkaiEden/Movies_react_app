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

const Pagination = props => {
  const { itemsCount, onPageChange, pageSize } = props;
  const NumberOfPage = itemsCount / pageSize;
  let pageNumber = [];
  for (let i = 1; i <= NumberOfPage + 1; i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  console.log(pageSize);
  console.log(itemsCount);
  console.log(NumberOfPage);
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(page => (
          <li key={page} className="page-item">
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
