import React, { Component } from 'react';
import _ from 'lodash';


class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        // return console.log(_.get(item, column.path));

        let result = _.get(item, column.path);

        if (column.path === "genre") {
            return item.genre.name;
        }
        return result;

    };
    createKey = (item, column) => {

        return item._id + (column.path || column.key);
    };


    render() {
        const { data, columns } = this.props;
        return (<tbody>
            {data.map(item => <tr key={item._id}>
                {columns.map(column => <td key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                </td>)}
            </tr>)}



        </tbody>);
    }
}

export default TableBody;



// (<tr key={item._id}>
//     {columns.map(column => <td key={() => this.createKey(item, column)} >

//         {() => this.renderCell(item, column)}</td>)}
// </tr>)