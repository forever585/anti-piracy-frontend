import React, {Component} from "react";
import {Link} from "react-router-dom";
import Popover from "@mui/material/Popover/Popover";
import logo from "../asset/image/logo.png"
import {routers} from "../config/config";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
    }

    logout = () => {
        this.setState({anchorEl: null});
        
        localStorage.setItem("loginUser", null);
        window.location.href = "/";
    };

    render() {
        return (
            <div className="app-header">
                <div className="brand">
                    <div className="desktop-toggler">
                        <button onClick={this.props.setSimpleNavState} className="menu-toggler">
                            <span className="bar"/>
                            <span className="bar"/>
                        </button>
                    </div>

                    <Link href="#" className="brand-logo">
                        <img src={logo} alt="" height="20"/>
                    </Link>
                </div>
                <div className="menu mr-3">
                    <form className="menu-search">
                    </form>
                    <div className="menu-item text-right"
                         onClick={(event) => this.setState({anchorEl: event.currentTarget})}
                         style={{cursor: "pointer"}}>
                        <div className="menu-link">
                            <div className="menu-img online">
                                <img src={logo} alt="" className="width-40 rounded-circle"/>
                            </div>
                            <div className="menu-text"><b>{this.props.email}</b></div>
                        </div>
                    </div>
                    <Popover
                        open={Boolean(this.state.anchorEl)}
                        anchorEl={this.state.anchorEl}
                        onClose={() => this.setState({anchorEl: null})}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <div className="text-right">
                            <Link to={routers.profile} className="dropdown-item d-flex align-items-center"
                                  onClick={(event) => this.setState({anchorEl: null})}>Edit Profile <i
                                className="fa fa-user-circle fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <Link to={routers.changePassword} className="dropdown-item d-flex align-items-center"
                                  onClick={(event) => this.setState({anchorEl: null})}>Change
                                Password <i className="fa fa-key fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <Link to={routers.globalSetting} className="dropdown-item d-flex align-items-center"
                                  onClick={(event) => this.setState({anchorEl: null})}>Admin
                                Setting <i className="fa fa-wrench fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                            <div className="dropdown-divider"/>
                            <Link to={routers.login} className="dropdown-item d-flex align-items-center"
                                  onClick={this.logout}>Log Out <i
                                className="fa fa-toggle-off fa-fw ml-auto text-gray-400 f-s-16"/></Link>
                        </div>
                    </Popover>
                </div>
            </div>
        )
    }
}