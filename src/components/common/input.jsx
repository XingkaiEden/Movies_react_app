import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                placeholder={label}
                id={name} name={name}
                className="form-control"

            />
            {error && <div className="alert alert-danger">{error}</div>}
            {/* if has error, then render the div, otherwise, not render div  */}
        </div>
    );
}

export default Input;