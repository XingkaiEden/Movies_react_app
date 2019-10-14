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
  const { itemCount, onPageChange, pageSize } = props;
  const NumberOfPage = itemCount / pageSize;
  let pageNumber = [];
  for (let i = 1; i <= NumberOfPage; i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(page => (
          <li className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
