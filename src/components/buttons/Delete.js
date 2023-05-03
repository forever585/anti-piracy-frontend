import React from "react";

export default function Delete(props) {
    const url = window.location.href;

    const deleteItem = (id) => {
        console.log(id);
    };

    return (
        <React.Fragment key={url + "_fragment"}>
                <span onClick={() => deleteItem(props.item["id"])} className="btn btn-danger mr-1"><i
                    className="fa fa-trash"/></span>
        </React.Fragment>
    )
}