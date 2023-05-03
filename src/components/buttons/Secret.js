import React from "react";
import {Link} from "react-router-dom";

export default function Secret(props) {
    const url = window.location.href;

    return (
        <React.Fragment key={url + "_fragment"}>
            <Link to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/edit/" + props.item["id"]}
                  className="btn btn-dark mr-1"><i
                className="fa fa-user-secret"/></Link>
        </React.Fragment>
    )
}