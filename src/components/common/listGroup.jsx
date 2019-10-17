import React from 'react';



const ListGroup = ({ items, valueProperty, textProperty, selectedItem, onChangeGenre }) => {

    // valueProperty and textProperty make ListGroup component resuable for any other components

    return (
        <ul className="list-group">
            {
                items.map(item =>
                    <li
                        key={item[valueProperty]}
                        onClick={() => onChangeGenre(item)}
                        style={{ cursor: "pointer" }}
                        className={selectedItem === item ? "list-group-item active" : "list-group-item"}>{item[textProperty]}</li>
                )
            }
        </ul>
    )
}

export default ListGroup;