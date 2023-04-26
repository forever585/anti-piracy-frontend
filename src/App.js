import React, {Component} from "react";
import {Link} from "react-router-dom";
import {RoutersLog, Routers} from "./route/Routers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/navigation/Navigation";
import './App.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isSimpleNav: false,
      }
  }
  static isLoggedIn() {
      return localStorage.getItem("loginUser") !== "null"
  }

  render() {
    if (!App.isLoggedIn()) {
        return (
          <RoutersLog/>
        )
    } else {
        return (
          <div className={this.state.isSimpleNav ? "app app-sidebar-minified" : "app"}>
            <div className="app-header">
                <Header email={""} setSimpleNavState={()=>this.setState({isSimpleNav: !this.state.isSimpleNav})}/>
            </div>
            <div className="app-sidebar">
                <Navigation isSimpleNav={this.state.isSimpleNav}/>
            </div>
            <div className="app-content">
                <div className="container-fluid">
                    <Routers/>
                </div>
            </div>
            <div className="app app-footer-fixed">
                <Footer/>
            </div>
            <Link href="#" data-click="scroll-top" className="btn-scroll-top fade">
                <i className="fa fa-arrow-up"/>
            </Link>
          </div>
        )
    }
  }
}