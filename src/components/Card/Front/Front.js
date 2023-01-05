import React from "react";

import styles from "./Front.module.css";

export default function Front(props){
    return(
        <div className={styles.cardContainer}>
        <div className={styles.front}>
            <div className={styles.cardNumberBox}>{props.num}</div>
            <div className={styles.flexbox}>
                <div className={styles.box}>
                    <span>card holder</span>
                    <div className={styles.cardHolderName}><p>{props.name}</p></div>
                </div>
                <div className={styles.box}>
                    <span>expires</span>
                    <div className={styles.expiration}>
                        <span className={styles.expMonth}><b>{props.month} /</b></span>
                        <span className={styles.expYear}> <b>{props.year}</b></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}