import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";
import CustomTable from "../../components/CustomTable";
import {mock_data} from "../../data/mock_data";

export default function ViewData(props) {
    const dataFromApi = () => {
        return mock_data.assets2
    };

    const [data] = React.useState(dataFromApi());

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title text-center">View Data</h4>
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
                    <div className="col-1">
                        <div className="form-group">
                            <label className="vertical-center">Class</label>
                        </div> 
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <select className="form-select">
                                <option>All</option>
                            </select>
                        </div>                         
                    </div>
                    <div className="col-5">
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
            <div className="card-header card-header-secondary">
                <div className="form-group">
                    <input type="checkbox" style={{"marginRight": "5px"}}/>
                    <label style={{"marginRight": "50px"}}>Show Thumbnails</label>
                    <input type="checkbox" style={{"marginRight": "5px"}}/>
                    <label>Select Multiple</label>
                </div>
            </div>
            <div className="card-body">
                <div className="container"><br/>
                    <CustomTable
                        type={{
                            "IMAGE": 'image',
                            "Description": 'description',                        
                            "Price": 'price',
                            "Date and Time": 'date',
                        }}
                        typeEx={{}}
                        style={{}}
                        image={["image"]}
                        button={{}}
                        buttonEx={{}}
                        searchField={true}
                        data={data}/>
                </div>
            </div>
        </div>
    )
}