import React, {Component} from "react";
import Select from 'react-select';
import { mock_data } from "../../data/mock_data";

const dataFromApi = mock_data.assets1;

export default class AddGroup extends Component {
    onAddAsset = () => {
        console.log("call sendNotification")
    };

    onSelectGroup = () => {
        console.log("call selectGroup")
    };

    onSubmit = () => {
        console.log("call submit")
    };

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <h4 className="card-title text-center">Add Group</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Assets</label>
                                <Select value={dataFromApi.value} options={dataFromApi} defaultValue={dataFromApi[0]}/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group center">
                                <center>
                                    <button onClick={this.onAddAsset} className="btn btn-primary">Add Asset</button>
                                </center>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <center>
                                    <button onClick={this.onSelectGroup} className="btn btn-primary">Select Group</button>
                                </center>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Official Name</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Original Work</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Authorization Letter</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>      
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Type</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>    
                        <div className="col-md-12">
                            <div className="form-group">
                                <center>
                                    <button onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                                </center>
                            </div>
                        </div>                                                                                        
                    </div>
                </div>
            </div>
        )
    }
}