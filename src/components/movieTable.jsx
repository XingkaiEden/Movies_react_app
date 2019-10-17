import React, { Component } from 'react';


import Likes from './common/likes';
import Table from './common/tabel';



class MovieTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { key: "like", content: item => <Likes onLiked={this.props.onLiked} item={item} /> },
        {
            key: "delete", content: item => <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(item)}
            >
                Delete
      </button>
        },
    ]
    render() {
        const { currPageOfMvoie, onSort, sortColumn } = this.props;
        return (
            <Table
                data={currPageOfMvoie}
                onSort={onSort}
                sortColumn={sortColumn}
                columns={this.columns}
            />
        );
    }


}


export default MovieTable;

