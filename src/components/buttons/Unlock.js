import React, {Component} from "react";import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import Modal from "@mui/material/Modal/Modal";

export default function Unlock(props) {


    const url = window.location.href;
    const [data, setData] = React.useState({
        modalState: false,
        reason: ""
    });


    const unlock = (id) => {
        setData({modalState : true});
    };

    const closeModal = () => {
        setData({modalState : false});
    };

    const submit = () => {
        console.log(props.item, data.reason)
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => unlock()} className="btn btn-danger mr-1">
                    <i className="fa fa-unlock-alt"/></span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Inactive Reason</h4>
                        </div>
                        <div className="modal-body text-center">
                                <textarea className="form-control" value={data.reason}
                                          onChange={(event) => setData({...data,reason : event.target.value})}/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={submit}>Submit</button>
                            <button className="btn btn-danger" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}