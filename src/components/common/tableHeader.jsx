// import React, { Component } from 'react';

// //we need colums: array
// //sortColumn: object
// //onsort function

// class TableHeader extends Component {

//     raiseSort = item => {
//         const sortColumn = { ...this.props.sortColumn };
//         if (sortColumn.selectedTitle === item) {
//             if (sortColumn.order === "asc")
//                 sortColumn.order = "desc";
//             else
//                 sortColumn.order = "asc";
//         } else {
//             sortColumn.order = "asc";
//             sortColumn.selectedTitle = item;
//         }
//         console.log(sortColumn)
//         this.props.onSort(sortColumn);
//     }
//     render() {
//         return (<thead>
//             <tr>
//                 {this.props.columns.map(title => <th
//                     key={title.titleName || title.key}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => this.raiseSort(title)}
//                 >
//                     {title.label}
//                 </th>)}
//             </tr>
//         </thead>);
//     }
// }

// export default TableHeader;




import React, { Component } from 'react';

class TableHeader extends Component {
    raiseSort = item => {
        const sortColumn = { ...this.props.sortColumn };


        if (sortColumn.selectedTitle === item.path) {
            if (sortColumn.order === "asc")
                sortColumn.order = "desc";
            else
                sortColumn.order = "asc";
        } else {
            sortColumn.order = "asc";
            sortColumn.selectedTitle = item.path;
        }
        this.props.onSort(sortColumn);
    }

    sortIcon = column => {
        if (column.path === this.props.sortColumn.path) return null;

        if (this.props.sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>

        return <i className="fa fa-sort-desc"></i>

    }
    render() {
        return (<thead>
            <tr>{this.props.columns.map(column => <th
                key={column.path || column.key}
                style={{ cursor: "pointer" }}
                onClick={() => this.raiseSort(column)}
            >{column.label}{this.sortIcon(column)}</th>)}</tr>
        </thead >);
    }
}

export default TableHeader;