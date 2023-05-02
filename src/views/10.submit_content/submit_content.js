import React, {Component} from "react";
import Select from "react-select";
import Multiselect from 'multiselect-react-dropdown';
import { mock_data } from "../../data/mock_data";

const dataFromApi = mock_data.asset_type;

export default class SubmitContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            advanced_options: [{id: 1, name: 'Year'}, {id: 2, name: 'Author/Publisher Keyword'},
                               {id: 3, name: 'Owner'}, {id: 4, name: 'Specifier'},
                               {id: 5, name: 'Ignore'}, {id: 6, name: 'Similar'},
                               {id: 7, name: 'Keywords'}, {id: 8, name: 'Auto Generate Keywords'},
                               {id: 9, name: 'Format'}],
        };
    }

    onSelect(selectedList, selectedItem) {
        console.log("call onSelect")
    }
    
    onRemove(selectedList, removedItem) {
        console.log("call onRemove")
    }

    onSubmit = () => {
        console.log("call onSubmit")
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <h4 className="card-title text-center">Submit Content</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <label className="bmd-label-floating">No file chosen</label>
                            <div className="custom-file" style={{zIndex: 0}}>
                                <input type="file" className="custom-file-input" accept="*"/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Asset Type</label>
                                <Select value={dataFromApi.value} options={dataFromApi} defaultValue={dataFromApi[0]}/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Your Asset Name</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Monitor Frequency</label>
                                <Select/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Input Your Own</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Monitor Duration(in days)</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Authorization Letter Url of copyrighted work</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Advanced Options</label>
                                <Multiselect options={this.state.advanced_options} selectedValues={this.state.selectedValue}
                                    onSelect={this.onSelect} onRemove={this.onRemove} displayValue="name" 
                                    showCheckbox="true" closeIcon="cancel"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Official Name of copyrighted work</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Please describe the copyrighted work so that it may be easily identified</label>
                                <textarea name="text" className="form-control" onChange={(event) => this.setState({title: event.target.value})}/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Official location of copyrighted work</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer card-footer-primary">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Authorization Letter Url of copyrighted work</label>
                                <input type="text" onChange={(event) => this.setState({title: event.target.value})}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group center">
                                <center>
                                    <input type="checkbox" onChange={(event) => this.setState({title: event.target.value})} style={{"marginRight": "5px"}}/>
                                    <label style={{"marginRight": "50px"}}>Create New Group</label>
                                    <input type="checkbox" onChange={(event) => this.setState({title: event.target.value})} style={{"marginRight": "5px"}}/>
                                    <label>Generate Patterns</label>
                                </center>
                            </div>
                            <div className="form-group center">
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