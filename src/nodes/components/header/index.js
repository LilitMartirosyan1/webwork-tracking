import React from "react";
import {NavLink} from "react-router-dom";
import "../../../assets/styles/components/header.scss";
import logo from "./img/logo.svg";
import wall from "./img/wall-bg.jpg";
import headerBg from "./img/header.png";

export default () => {
    return (
        <>
            <nav>
                <div className={"webwork"} style={{backgroundImage: `url(${wall})`}}>
                    <div className="wrapper">
                        <div className="container">
                            <div className="navbar-header">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt=""/>
                                    </a>
                                    <h2 className={"text-logo"}>
                                        WebWork
                                        <span>timetracker</span>
                                    </h2>
                                </div>
                            </div>
                            <div className={"sign-in"}>
                                <div>
                                    <a href="#">Start Free Trial</a>
                                </div>
                                <div>
                                    <a href=""> Sign in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <div className={"navbar"} style={{backgroundImage: `url(${headerBg})`}}>
                <ul>
                    <li><NavLink to={"/"}>home</NavLink></li>
                    <li><NavLink to={"/features"}>features</NavLink></li>
                    <li><NavLink to={"/time-tracking"}>time tracking</NavLink></li>
                    <li><NavLink to={"/price"}>price</NavLink></li>
                    <li><NavLink to={"/download"}>download</NavLink></li>
                </ul>
            </div>
        </>
    )
}