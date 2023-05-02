import React, {Component} from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";

export default function IconBtn(props) {


    const url = window.location.href;

    const [data, setData] = React.useState({
        checked: false
    });


    const showOrHide = (item, checkedState) => {
        setData({...data, checked: checkedState});
        console.log(item,checkedState);
    };

    return (
        <React.Fragment key={url + "_fragment_request"}>
            <FormControlLabel
                control={<Checkbox onChange={(event) => showOrHide(props.item, event.target.checked)}
                                   checked={data.checked}/>}
                label=""/>
        </React.Fragment>
    )

}
