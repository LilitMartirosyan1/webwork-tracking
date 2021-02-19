import React from "react";
import "../../../assets/styles/pages/timeTracking.scss";
import timeTrackingGif from "../../pages/timeTracking/img/time-tracking.gif";
import employee from "../../pages/timeTracking/img/employee-monitoring.png";


export default () => {

    return (
        <div className={"timeTracking"}>
            <h2>Time Tracking & Employee Monitoring</h2>
            <div className="timeTracking-container">
                <div className="timeTracking-image">
                    <img className={"img-gif"} src={timeTrackingGif} alt="Monitor work hours"/>
                    <img className={"img-employee"} src={employee} alt="Time tracking desktop software"/>
                </div>
                <div className="timeTracking-text">
                    <h4>TIME TRACKING</h4>
                    <p>WebWork is a cross-platform tracking tool which helps you accurately
                        track your working day by monitoring computer usage. It will take random screenshots,
                        record activity level, active applications and websites. All that data will be available
                        by visual report, which can be easily turned into exportable documents.</p>
                    <p>Tracking your billable and non-billable hours will give you stronger sense how you spend
                        time on each project, contract and task. Which will help you find the optimal conditions
                        to improve productivity and get better results for your projects.</p>
                </div>
                <button>Find out more info</button>
            </div>
        </div>
    )
}