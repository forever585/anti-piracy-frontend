import React, {Component} from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";

export default class NoticeAnalytics extends Component {
    constructor(props) {
        super(props);
        this.state={
            date: "",
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <h4 className="card-title text-center">Notice Analytics</h4>
                </div>
                <div className="card-header card-header-secondary">
                    <div className="row">
                        <div className="col-2">
                            <div className="form-group">
                                <FormControlLabel
                                    control={
                                        <Switch/>
                                    }
                                    label="Assets"
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-group">
                                <select className="form-select">
                                    <option>Class</option>
                                </select>
                            </div>
                        </div>    
                        <div className="col-7">
                            <div className="form-group">
                                <select className="form-select">
                                    <option>Bharti Share Market Course</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="form-group">
                                <button className="btn btn-primary float-right"><i className="fa fa-cog"></i></button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="card-header card-header-secondary">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Start Date</label>
                        </div>
                        <div className="col-md-3">
                            <label>End Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="date" onChange={(event) => this.setState({date: event.target.value})}
                                    className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <input type="date" onChange={(event) => this.setState({date: event.target.value})}
                                className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Choose date</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Summary</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Facts</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Platform Removals-Search</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Platform Removals-Social</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Platform Removals-Others</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Platform Type</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Notice Responses</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Page Behaviours</label>
                                <button className="btn btn-primary float-right button-circular"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}