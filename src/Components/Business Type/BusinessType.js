import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './BusinessType.css';
import { Link } from "react-router-dom";

export default function BusinessType() {
    const traderForm = () => {  // Corrected function name
        window.location.href = "https://mill-register-form.netlify.app/";
    };

    return (
        <div className="businessTypeCont">
            <h1>Select business type</h1>
            <div className="biz-btns">
                <button className="biz-btn" onClick={traderForm} id="biz-btn1">Trader</button><br />
                <button className="biz-btn" id="biz-btn2">Mill</button><br />
                <button className="biz-btn" id="biz-btn3">FPC</button><br />
                <button className="biz-btn" id="biz-btn4">FPO</button><br />
            </div>
        </div>
    );
}
