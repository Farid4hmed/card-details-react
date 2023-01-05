import React, { useState } from "react";
import styles from "./Form.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form(props){
    const [fullName, setFullName] = useState();
    const [cardNo, setCardNo] = useState();
    const [cvv, setCvv] = useState();
    const [expireMonth, setExpireMonth] = useState();
    const [expireYear, setExpireYear] = useState();
    const [err, setErr] = useState(false);
    const [fullNameErr, setFullNameErr] = useState(false);
    const [cardNoErr, setCardNoErr] = useState(false);
    const [expMonthErr, setExpMonthErr] = useState(false);
    const [expYearErr, setExpYearErr] = useState(false);
    const [cvvErr, setCvvErr] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        //Empty Field Error
        if(!fullName || !cardNo || !cvv || !expireMonth || !expireYear){
            setErr(true);
        }

        //FullName Format Error
        if(fullName){
            if(fullName.charCodeAt(0) < 65 || fullName.charCodeAt(0) > 90)setFullNameErr(true);
            var countSpaces = 0;
        for(var i=0; i<fullName.length; i++){
            if(fullName.charCodeAt(i) === 32)countSpaces = 1;
            if(fullName.charCodeAt(i) === 32 || fullName.charCodeAt(i) >= 65 && fullName.charCodeAt(i) <= 90 || fullName.charCodeAt(i) >= 97 && fullName.charCodeAt(i) <= 122){}
            else {
                setFullNameErr(true);
            }
            if(fullName.charCodeAt(i+1)!=32 && i < fullName.length-1 && fullName.charCodeAt(i+1) < 65 || fullName.charCodeAt(i+1) > 90 && fullName.charCodeAt(i) === 32){
                setFullNameErr(true);
            }
        }
        if(countSpaces === 0)setFullNameErr(true);
        }

        //Card Number Format Error
        if(cardNo){
            var countNums = 0;
            for(var i=0; i<cardNo.length; i++){
                if(cardNo.charCodeAt(i) >= 48 && cardNo.charCodeAt(i) <= 57)countNums++;
                if(cardNo.charCodeAt(i)!==32 && cardNo.charCodeAt(i) < 48 || cardNo.charCodeAt(i) > 57)setCardNoErr(true);
            }
            if(countNums != 16)setCardNoErr(true);
            if(!cardNoErr && cardNo.charCodeAt(4)!==32 || cardNo.charCodeAt(9)!==32 || cardNo.charCodeAt(14)!==32){
                setCardNoErr(true);
            }

        }

        //Expire Month Format Error
        if(expireMonth){
            if(expireMonth.length !== 2)setExpMonthErr(true);
            for(var i=0; i<expireMonth.length; i++)
            if(expireMonth.charCodeAt(i) < 48 || expireMonth.charCodeAt(i) > 57)setExpMonthErr(true);
        }

        //Expire Year Format Error
        if(expireYear){
            if(expireYear.length !== 2)setExpYearErr(true);
            for(var i=0; i<expireYear.length; i++){
                if(expireYear.charCodeAt(i) < 48 || expireYear.charCodeAt(i) > 57)setExpYearErr(true);
            }
        }

        //Cvv Format Error
        if(cvv){
            if(cvv.length !== 3)setCvvErr(true);
            for(var i=0; i<cvv.length; i++){
                if(cvv.charCodeAt(i) < 48 || cvv.charCodeAt(i) > 57)setCvvErr(true);
            }
        }
        if(!err && !fullNameErr && !cardNoErr && !expMonthErr && !expYearErr &&!cvvErr){
            props.setName(fullName);
            props.setNum(cardNo);
            props.setMonth(expireMonth);
            props.setYear(expireYear);
            props.setCVV(cvv);

            
            toast.success("Success!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
            <span>CARDHOLDER NAME</span>
            <input type="text" onChange={x=>{setFullName(x.target.value); setFullNameErr(false)}} placeholder="e.g. Jane Appleseed" />
            {!fullNameErr&&err&&!fullName? <label className={styles.warning}>Cardholder name required.</label>: ""}
            {fullNameErr? <label className={styles.warning}>Wrong format!</label>: ""}
        </div>
        <div className={styles.inputBox}>
            <span>CARD NUMBER</span>
            <input type="text" onChange={x=>{setCardNo(x.target.value); setCardNoErr(false)}} placeholder="e.g. 1234 5678 9123 0000"/>
            {err&&!cardNo? <label className={styles.warning}>Card number required.</label>: ""}
            {cardNoErr? <label className={styles.warning}>Invalid Card Number!</label>: ""}
        </div>
        <div className={styles.flexbox}>
            <div className={styles.flexbox2}>
            <div className={styles.inputBox}>
                <span>expire mm</span>
                <input type="text" maxLength={2} onChange={x=>{setExpireMonth(x.target.value); setExpMonthErr(false)}} placeholder="MM"/>
                {err&&!expireMonth? <label className={styles.warning}>Expiration month required.</label>: ""}
                {expMonthErr? <label className={styles.warning}>Wrong Format!</label>:""}
            </div>
            <div className={styles.inputBox}>
                <span>expire yy</span>
                <input type="text" maxLength={2} onChange={x=>{setExpireYear(x.target.value); setExpYearErr(false)}} placeholder="YY"/>
                {err&&!expireYear? <label className={styles.warning}>Expiration year required.</label>: ""}
                {expYearErr? <label className={styles.warning}>Invalid Format!</label>:""}
            </div>
            </div>
            <div className={styles.inputBox}>
                <span>cvv</span>
                <input type="text" maxLength={3} onChange={x=>{setCvv(x.target.value); setCvvErr(false)}} placeholder="e.g. 123"/>
                {err&&!cvv? <label className={styles.warning}>CVV required.</label>: ""}
                {cvvErr? <label className={styles.warning}>Invalid Format!</label>:""}
            </div>
        </div>
        <input type="submit" value="Confirm" className={styles.submitBtn} />
    </form>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
       </div>
       

    );
};

