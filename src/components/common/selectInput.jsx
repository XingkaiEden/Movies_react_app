import React from 'react';

const SelectInput = ({ name, label, error, options, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                placeholder={label}
                id={name} name={name}
                className="form-control"

            >
                <option value=""></option>
                {options.map(option =>
                    <option key={option._id} value={option._id}>{option.name}</option>
                )}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
            {/* if has error, then render the div, otherwise, not render div  */}
        </div>
    );
}

export default SelectInput;