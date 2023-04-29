import React, {Component} from "react";
import {routers} from "../../data/config";
import NavItem from "./NavItem";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened:[]
        };
    }

    setIndex = (index) => {
        let opened=this.state.opened;
        for (let i = 0; i < 13; i++){
            opened[i]=false;
        }
        opened[index]=true;
        this.setState({opened:opened});
    };

    render() {
        return (
            <div className="app-sidebar-content nav-scroll">
                <div className="menu">
                    <NavItem
                        title={"Home"}
                        mainTab={routers.home}
                        icon={"fa fa-laptop"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(0)}
                        open={this.state.opened[0]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Summary"}
                        mainTab={""}
                        icon={"fas fa-user-astronaut"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(1)}
                        open={this.state.opened[1]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Review Analytics"}
                        mainTab={routers.taxList}
                        icon={"fa fa-list"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(2)}
                        open={this.state.opened[2]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Notice Analytics"}
                        mainTab={routers.idList}
                        icon={"fa fa-comment"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(3)}
                        open={this.state.opened[3]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Your Assets"}
                        mainTab={routers.membershipList}
                        icon={"fa fa-credit-card"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(4)}
                        open={this.state.opened[4]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"View Data"}
                        mainTab={""}
                        icon={"fa fa-database"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(5)}
                        open={this.state.opened[5]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Review Pannel"}
                        mainTab={""}
                        icon={"fa fa-tag"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(6)}
                        open={this.state.opened[6]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Notice Pannel"}
                        mainTab={""}
                        icon={"fa fa-bell"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(7)}
                        open={this.state.opened[7]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Submit Content"}
                        mainTab={""}
                        icon={"fa fa-check"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(8)}
                        open={this.state.opened[8]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Text Submit"}
                        mainTab={""}
                        icon={"fa fa-file-pdf"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(9)}
                        open={this.state.opened[9]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Add Group"}
                        mainTab={""}
                        icon={"fa fa-users"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(10)}
                        open={this.state.opened[10]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Modify Group"}
                        mainTab={""}
                        icon={"fa fa-edit"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(11)}
                        open={this.state.opened[11]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Email Configration"}
                        mainTab={""}
                        icon={"fa fa-envelope"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(12)}
                        open={this.state.opened[12]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                    <NavItem
                        title={"Manual "}
                        mainTab={""}
                        icon={"fa fa-hand"}
                        tabs={{}}
                        setOpenIndex={() => this.setIndex(13)}
                        open={this.state.opened[13]}
                        isSimpleNav={this.props.isSimpleNav}
                    />
                </div>
            </div>
        )
    }
}