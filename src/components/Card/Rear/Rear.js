import React from "react";

import styles from "./Rear.module.css";




export default function Rear(props){
    return (
        <div className={styles.back}>
        <div className={styles.blackbar}></div>
        <div className={styles.graybar}><p>{props.cvv}</p></div>
        </div>

    );
};