import React from 'react';
import styles from "./Input.module.css"


const Input = ({
   type,
   required,
   id,
    value,
    onChange
   }) => {
    return (
        <>
            <input
                autoComplete="off"
                className={styles.inputStyle}
                required={required}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default Input;