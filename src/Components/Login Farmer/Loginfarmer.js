import React from "react";
import './Loginfarmer.css'
import { Link } from "react-router-dom";

export default function Loginfarmer(){
    function farmerDashboard(){
        window.location.href='https://farmer-dashboard-final.netlify.app/'
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
                <button type="submit" onClick={farmerDashboard()} className="submit-btn">Submit</button> 
            </form>
        </div>
    )
}