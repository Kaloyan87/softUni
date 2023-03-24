import React from 'react';
import styles from "./Input.module.css"


const Input = ({
                   type,
                   required,
                   id,
                   value,
                   onChange,
                   customStyles,
                   placeholder
               }) => {
    return (
        <>
            <input
                autoComplete="off"
                className={customStyles ? customStyles : styles.inputStyle}
                required={required}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
};

export default Input;