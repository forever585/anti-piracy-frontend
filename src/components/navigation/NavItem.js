import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Collapse from "@mui/material/Collapse/Collapse";

export default class NavItem extends Component {
    render() {
        if (Object.keys(this.props.tabs).length > 0) {
            return (
                <div className="menu-item">
                    <div className="menu-link"
                         onClick={this.props.setOpenIndex}>
                        <span className="menu-icon"><i className={this.props.icon}/></span>
                        { this.props.isSimpleNav ? "" : (<span className="menu-text">{this.props.title}</span>) }
                        <span className="menu-caret"><b className="fa fa-caret-down"/></span>
                    </div>
                    {this.props.isSimpleNav ? (
                        ""
                    ) : (
                        <Collapse in={this.props.open} timeout="auto" className="collapse-style"
                                  unmountOnExit>
                            <div className="collapse-group">
                                {Object.keys(this.props.tabs).map((val, index) => (
                                    <NavLink key={index} to={this.props.tabs[Object.keys(this.props.tabs)[index]]}
                                             className="menu-link" activeclassname="active">
                                        <span className="menu-text">{Object.keys(this.props.tabs)[index]}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </Collapse>
                    )}
                </div>
            )
        } else {
            return (
                <div className="menu-item">
                    <NavLink to={this.props.mainTab} className="menu-link"
                             onClick={this.props.setOpenIndex}>
                        <span className="menu-icon"><i className={this.props.icon}/></span>
                        {this.props.isSimpleNav ? "" : (
                            <span className="menu-text">{this.props.title}</span>
                        )}
                    </NavLink>
                </div>
            )
        }
    }
}