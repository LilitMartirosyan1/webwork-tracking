import React, {Component} from "react";
import "../../../assets/styles/pages/download.scss";
import wind from "../../pages/download/img/logo-windows.svg";
import apple from "../../pages/download/img/logo-apple.svg";
import linux from "../../pages/download/img/logo-linux.svg";

export default class Download extends Component {

    state = [
        {id: 0, icn: wind},
        {id: 1, icn: apple},
        {id: 2, icn: linux},
    ]

    render() {
        return (
            <div className={"download"}>
                <h2>OUR SOFTWARE IS AVAILABLE ON ALL MAJOR OS!</h2>
                <div className="download-container">

                    {
                        this.state.map((e) => {
                            return (
                                <div className="icn" key={e.id}>
                                    <img src={e.icn} alt=""/>
                                    <button>Download</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}