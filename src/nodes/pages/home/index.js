import React from "react";
import "../../../assets/styles/pages/home.scss";
import timeTracking from "../../pages/home/img/time-tracking.png";

export default () => {

    return (
        <div className={"home"}>
            <div className="home-container">
                <div className="home-tracker">
                    <img src={timeTracking} alt=""/>
                </div>
                <div className="home-txt">
                    <h1>Time Tracker With Screenshots</h1>
                    <p>WebWork Time Tracker is a time tracking
                        and employee monitoring software. Track
                        time and screenshots, export timesheet reports,
                        add billable contracts and generate invoices.
                        Boost your team’s productivity using our amazing
                        features like: screenshot monitoring, web & app usage
                        tracking, powerful reports, integrations, keyboard
                        and mouse activity tracking and more. Setup in
                        minutes and try our demo without paying at start.
                    </p>
                    <button>Start free trial</button>
                </div>
            </div>

        </div>
    )
}