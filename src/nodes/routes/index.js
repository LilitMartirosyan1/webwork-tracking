import React from "react";
import {Route,Redirect} from "react-router-dom";
import {Home,Features,TimeTracking,Price,Download} from "../pages";


export default function () {
    return (
        <>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/features"} component={Features}/>
            <Route path={"/time-tracking"} component={TimeTracking}/>
            <Route path={"/price"} component={Price}/>
            <Route path={"/download"} component={Download}/>
            <Redirect to={"/"}/>
        </>
    )
}