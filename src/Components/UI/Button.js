import React from "react";

import styles from "./Button.module.css";

function Button(props) {
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            className={`${styles.btn} ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default Button;
