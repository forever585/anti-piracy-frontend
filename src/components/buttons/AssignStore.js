import React from "react";
import Modal from "@mui/material/Modal/Modal";
import {example} from "../../data/mock_data";

export default function AssignStore(props) {


    const url = window.location.href;

    const getAllStores = () => {
        return example.products;
    };
    const [data, setData] = React.useState({
        modalState: false,
        store: getAllStores()[0]
    });

    const unlock = (id) => {
        setData({modalState: true});
    };

    const closeModal = () => {
        setData({modalState: false});
    };

    const submit = () => {
        console.log(props.item, data.store)
    };


    return (
        <React.Fragment key={url + "_fragment_request"}>
                <span onClick={() => unlock()} className="btn btn-primary mr-1">
                    <i className=""/>Assign Store</span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Assign Store ({props.item["name"]})</h4>
                        </div>
                        <div className="modal-body text-center">
                            <select className="form-control"
                                    onChange={(event) => setData({...data, store: event.target.value})}>
                                {getAllStores().map((item, index) => (
                                    <option key={index} value={item}>{item["name"]}</option>
                                ))}
                            </select>
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
