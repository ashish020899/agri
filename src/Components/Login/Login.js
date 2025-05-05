import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login(){
    function investorDash(){
        window.location.href='https://agri-cred-investor-hub-61.lovable.app/deals/INV-9482'
    }
    return(
        <div className="loginCont">
            <form action="">
                <h1>Login</h1>
                <div className="email">
                    <label htmlFor="">Email ID <span className="red">*</span></label>
                    <br />
                    <input type="text" required/>
                </div>
                <div className="password">
                    <label htmlFor="">Password <span className="red">*</span></label>
                    <br />
                    <input type="password" required/>
                </div>
                <button type="submit" onClick={investorDash()} className="submit-btn">Submit</button>  
            </form>
        </div>
    )
}