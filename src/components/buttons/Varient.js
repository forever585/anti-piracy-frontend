import React from "react";
import {Link} from "react-router-dom";

export default function Varient(props) {
    const url = window.location.href;

    return (
        <React.Fragment key={url + "_fragment"}>
            <Link
                to={(url.endsWith("/list") ? url.replace("/list", "") : url) + "/varient/" + props.item["id"]}
                state={props.item}
                className="btn btn-primary mr-1"><i
                className="fa fa-cubes"/></Link>
        </React.Fragment>
    )
}