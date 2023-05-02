import React, {Component} from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";

export default class ReviewPannel extends Component {
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
                    <h4 className="card-title text-center">Review Pannel</h4>
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
                        <div className="col-4">
                            <div className="form-group">
                                <label>Class</label>
                                <select className="form-select">
                                    <option>All</option>
                                </select>
                            </div> 
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <label>Group</label>
                                <select className="form-select">
                                    <option>Default Group</option>
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
                                <input type="checkbox" style={{"marginRight": "5px"}}/>
                                <label>Select Multiple</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label style={{"marginRight": "50px"}}>Total Item: 0</label>
                                <label style={{"marginRight": "50px"}}>Selected: 0</label>
                                <label style={{"marginRight": "50px"}}>Selected Files: 0</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}