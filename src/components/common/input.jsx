import React from 'react';

const Input = ({ name, label, value, error, onChange, autoFocus }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                autoFocus={autoFocus}
                placeholder={name}
                id={name} name={name}
                type={name}
                className="form-control"
                value={value}
                onChange={onChange} />
            {error && <div className="alert alert-danger">{error}</div>}
            {/* if has error, then render the div, otherwise, not render div  */}
        </div>
    );
}

export default Input;