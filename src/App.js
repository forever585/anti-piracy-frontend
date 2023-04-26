import React, {Component} from "react";
import {RoutersLog} from "./route/Routers";
import './App.css';

export default class App extends Component {
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
          <div>Welcome to Anti-Piracy</div>
        )
    }
  }
}