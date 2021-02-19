import React from "react";
import "../../../assets/styles/components/footer.scss";
import wall from "../../components/header/img/wall-bg.jpg";
import logo from "../../components/header/img/logo.svg";
import footerPattern from "../../components/footer/img/footer-pattern.png";


export default () => {
    return (
        <footer>
            <div className="footer-top" style={{backgroundImage: `url(${wall})`}}>
                <div className="footer-top-wrapper" style={{backgroundImage: `url(${footerPattern})`}}>
                    <div className="footer-top-container">
                        <div className="footer-top-block">
                            <h3>PRODUCT</h3>
                            <ul>
                                <li>Time Tracking</li>
                                <li>Employee Monitoring</li>
                                <li>Tracker with Screenshots</li>
                                <li>Boost Productivity</li>
                                <li>Pricing</li>
                                <li>WebWork Blog</li>
                            </ul>
                        </div>
                        <div className="footer-top-block">
                            <h3>TIME TRACKING</h3>
                            <ul>
                                <li>Features</li>
                                <li>Integrations</li>
                                <li>Comparison</li>
                                <li>Reviews</li>
                                <li>User Requests</li>
                                <li>Start Free Trial</li>
                            </ul>
                        </div>
                        <div className="footer-top-block">
                            <h3>POWERFULL BUT SIMPLE</h3>
                            <ul>
                                <li>Time Tracker for Employees</li>
                                <li>Time Tracker for Teams</li>
                                <li>Time Tracker for Freelancers</li>
                                <li>Windows Software</li>
                                <li>Mac OS Software</li>
                                <li>Linux Software</li>
                            </ul>
                        </div>
                        <div className="footer-top-block">
                            <h3>RESOURCES</h3>
                            <ul>
                                <li>Sitemap</li>
                                <li>FAQ</li>
                                <li>Rest API</li>
                                <li>Privacy policy</li>
                                <li>Terms of service</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom" style={{backgroundImage: `url(${footerPattern})`}}>
                <div className="footer-bottom-container">
                    <div className={"footer-block left"}>
                        <a href="">
                            <img src={logo} alt=""/>
                        </a>
                        <div className={"text-copyright"}>
                            <a href="#">WebWork Tracker </a>
                            <small>
                                <b> © 2021</b>
                            </small>
                        </div>
                    </div>

                    <div className={"footer-block right"}>
                        <p>
                            530 Divisadero St PMB 848 San Francisco, CA 94117
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}