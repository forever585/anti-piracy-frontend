import React, {Component} from "react";
import {useLocation} from "react-router";

export default function Process(props) {


    const url = window.location.href;


    const process = (id) => {
        console.log(id);
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
            {props.item.processed === 0 ? (
                <span onClick={() => process(props.item["id"])} className="btn btn-success mr-1">
                    <i className="fa fa-phone-alt"/> Process</span>
            ) : (
                <span className="text-green"><b>Processed</b></span>
            )}

        </React.Fragment>
    )

}