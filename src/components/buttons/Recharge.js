import React, {Component} from "react";
import {useLocation} from "react-router";
import Modal from "@mui/material/Modal/Modal";

export default function Reject(props) {


    const url = window.location.href;
    const [data, setData] = React.useState({
        modalState: false,
        amount: 0
    });

    const recharge = (id) => {
        setData({...data, modalState: true});
    };

    const closeModal = () => {
        setData({...data, modalState: false});
    };

    const submit = () => {
        console.log(data)
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => recharge()} className="btn btn-primary mr-1">
                    <i className=""/>Recharge</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Enter Amount</h4>
                        </div>
                        <div className="modal-body text-center">
                            <input className="form-control" type="number" value={data.amount}
                                   onChange={(event) => setData({...data, amount: event.target.value})}/>
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