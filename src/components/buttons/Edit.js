import React from "react";
import {Link} from "react-router-dom";

export default function Edit(props) {
    const url = window.location.href;

    return (
        <React.Fragment key={url + "_fragment"}>
            <Link
                to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/edit/" + props.item["id"]}
                state={props.item}
                className="btn btn-success mr-1"><i
                className="fa fa-edit"/></Link>
        </React.Fragment>
    )
}