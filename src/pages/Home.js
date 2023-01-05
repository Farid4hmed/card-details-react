import React, {useState} from "react";
import Front from "../components/Card/Front/Front";
import Form from "../components/Form/Form";
import Rear from "../components/Card/Rear/Rear";
import styles from "./Home.module.css";

export default function Home(){
    const [fullName, setFullName] = useState("");
    const [cardNo, setCardNo] = useState("XXXX XXXX XXXX XXXX");
    const [expMonth, setExpMonth] = useState("XX");
    const [expYear, setExpYear] = useState("XX");
    const [cvv, setCVV] = useState("XXX");


    return (
        <div className={styles.container}>
         <div className={styles.gradientBackground}>
         <Front 
         name={fullName} num={cardNo} month={expMonth} year={expYear}
         />
         <Rear cvv={cvv}/>
         </div>

         <Form 
        setName={setFullName} setNum={setCardNo} setMonth={setExpMonth} setYear={setExpYear} setCVV={setCVV}
         />

        </div>
    );
};