import React,{Component} from "react";
import "../../../assets/styles/pages/features.scss";
import wall from "../../components/header/img/wall-bg.jpg";
import icn1 from "../../pages/features/img/icon_1.png";
import icn2 from "../../pages/features/img/icon_2.png";
import icn3 from "../../pages/features/img/icon_3.png";
import icn4 from "../../pages/features/img/icon_4.png";
import icn5 from "../../pages/features/img/icon_5.png";
import icn6 from "../../pages/features/img/icon_6.png";
import icn7 from "../../pages/features/img/icon_7.png";
import icn8 from "../../pages/features/img/icon_8.png";
import icn9 from "../../pages/features/img/icon_9.png";
import icn10 from "../../pages/features/img/icon_10.png";
import icn11 from "../../pages/features/img/icon_11.png";
import icn12 from "../../pages/features/img/icon_12.png";

export default class Features extends Component{

    state = [
        {id:0,icn:icn1,heading:"TIME TRACKING",txt:"Accurate Time Tracking"},
        {id:1,icn:icn2,heading:"Screenshots",txt:"4 Screenshot modes for employee monitoring"},
        {id:2,icn:icn3,heading:"Activity Levels ",txt:"WebWork Time Tracker tracks activity"},
        {id:3,icn:icn4,heading:"User Types ",txt:"Different user types with different permissions"},
        {id:4,icn:icn5,heading:"Online Reports ",txt:"Timesheet and Statistics, Exporting Reports"},
        {id:5,icn:icn6,heading:"Invoice ",txt:"Invoice generator for billable contracts"},
        {id:6,icn:icn7,heading:"Manual Time ",txt:"Adding time manually  without tracking"},
        {id:7,icn:icn8,heading:"Apps and Websites ",txt:"Application and Website usage monitoring"},
        {id:8,icn:icn9,heading:" Billable hours",txt:"Set an hourly rate, bill for  tracked hours"},
        {id:9,icn:icn10,heading:"Activity Description ",txt:"Editable Activity Descriptions (memo) for each screenshot"},
        {id:10,icn:icn11,heading:"Customer Support ",txt:"Get assistance for any issue 24 hrs"},
        {id:11,icn:icn12,heading:"Tasks ",txt:"Easily manage and track progress of tasks"},
    ]


    render() {
        return (
            <div className={"features"} style={{backgroundImage: `url(${wall})`}}>
                <div className="features-wrapper">
                    <div className="features-container">
                        <h2>FEATURES</h2>
                        <p>All essential tools for time tracking and employee monitoring.</p>
                        <div className="boxes-container">
                            {
                                this.state.map((e) => {
                                    return (
                                        <div key={e.id} className={"features-box"}>
                                            <img src={e.icn} alt=""/>
                                            <h3>{e.heading}</h3>
                                            <p>{e.txt}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button>try it for free</button>
                    </div>
                </div>
            </div>
        )
    }
}