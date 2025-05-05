import "./Landingpage.css";
import React from "react";
import { Link } from "react-router-dom";
import heroimg from '../Assets/hero_img.jpg';
import sec2img from "../Assets/sec2_img.jpg";
import sec4img1 from '../Assets/sec4img1.jpg';
import sec4img2 from "../Assets/sec4img2.jpg";
import sec4img3 from "../Assets/sec4img3.avif";
import sec4img from "../Assets/sec4_img.jpg";
import { useState } from "react";

export default function Landingpage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    return (
        <div className="mainCont">
            <div className="header">
                <h1>Agricred</h1>
                <div className="nav">
                    <ul>
                        <li>Credit Assessment</li>
                        <li>Manage Finances</li>
                        <li>Market Insights</li>
                        <li>
                            <button id="signin-btn" onClick={()=>setIsModalOpen(true)}>Sign In</button>
                        </li>
                        <li>
                            <button id="signup-btn" onClick={()=>setIsModal2Open(true)}>Sign Up</button>
                        </li>
                    </ul>
                </div>
                {
                    isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <button className="cls-btn" onClick={()=>setIsModalOpen(false)}>X</button>
                                <div className="modal-content">
                                    <Link to='/login'>
                                        <div className="goToLogin">
                                            <h2>Login As Investor</h2>
                                        </div>
                                    </Link>
                                    <Link to='/login-farmer'>
                                        <div className="goToLogin">
                                            <h2>Login As Farming Entity</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )
                }
                {
                    isModal2Open && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <button className="cls-btn" onClick={()=>setIsModal2Open(false)}>X</button>
                                <div className="modal-content">
                                    <Link to='/login'>
                                        <div className="goToLogin">
                                            <h2>Register As Investor</h2>
                                        </div>
                                    </Link>
                                    <Link to='/business-type'>
                                        <div className="goToLogin">
                                            <h2>Register As Agribusiness</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="page">
                <div className="sec1">
                    <div className="landing">
                        <div className="landingtxt">
                            <h1>"Unlocking smart solutions to help farmers grow"</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores itaque enim similique exercitationem minus eos error officiis odio veniam obcaecati, eum dolor quis maxime dolorum, voluptas ducimus. Illo, velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo quia distinctio nihil aliquid quaerat ullam non inventore, similique iste, obcaecati ipsa! Qui excepturi velit alias obcaecati quis, placeat adipisci?</p>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                        <div className="signIn-btns">
                            <button id="signin-btn1" className="signIn-btn">Sign In as Investor</button>
                            <button id="signin-btn2" className="signIn-btn">Sign In as Farming Entity</button>
                        </div>
                    </div>
                    <img src={heroimg}/>
                </div>
                <br /><br />
                <div className="sec2">
                    <div className="sec2img">
                        <div className="image">
                            <img src={sec2img}/>
                        </div>
                    </div>
                    <h2>"We bring you the latest and most relevant insights"</h2>
                </div>
                <br /><br />
                <div className="sec3">
                    <div className="insight" id="insight1">
                        <h1 style={{ color: "green" }}><i className="fa-solid fa-book-open"></i></h1>
                        <h3>2500+<br />Stories</h3>
                    </div>
                    <div className="insight" id="insight2">
                        <h1 style={{ color: "green" }}><i className="fa-regular fa-file"></i></h1>
                        <h3>200+<br />Seasonal<br />Reports</h3>
                    </div>
                    <div className="insight" id="insight3">
                        <h1 style={{ color: "green" }}><i className="fa-solid fa-chart-simple"></i></h1>
                        <h3>Yearly<br />Reports</h3>
                    </div>
                </div>
                <br /><br />
                <div className="sec4">
                    <img src={sec4img} />
                    <div className="sec4txt">
                        <h3>Agricred launches a pilot project in crop advisory segment.</h3>
                        <p>Read more</p>
                    </div>
                </div>
                <br /><br />
                <div className="sec5">
                    <h2>Commodity Insights</h2>
                    <div className="sec5imgs">
                        <img src={sec4img1} />
                        <img src={sec4img2} />
                        <img src={sec4img3} />
                    </div>
                </div>
            </div>
        </div>
    );
}