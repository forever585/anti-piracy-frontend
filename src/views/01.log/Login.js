import React, {Component} from "react";
import {Link} from "react-router-dom";
import {routers} from "../../data/config";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: "",
            password: "",
        };
    }

    submit = () => {
        console.log(this.state.email, this.state.password)

        localStorage.setItem("loginUser","admin")
        window.location.href="/";
    };

    render() {
        return (
            <div id="app" className="app app-full-height app-without-header">
                <div className="login">
                    <div className="login-content">
                        <div align="center">
                            <img align="center" img="" style={{width: "100px", height: "auto"}}
                                 src="./logo.png"
                                 alt="img"/>
                        </div>
                        <h1 className="text-center">Anti Piracy</h1>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input data-validate="Valid email is required: ex@abc.xyz" type="email"
                                   onChange={(event) => this.setState({email: event.target.value})}
                                   className="form-control form-control-lg fs-15px" name="email"
                                   placeholder="username@address.com"/>
                        </div>
                        <div className="form-group">
                            <div className="d-flex">
                                <label>Password</label>
                                <Link to={routers.forgot} className="ml-auto text-muted">Forgot password?</Link>
                            </div>
                            <input type="password" className="form-control form-control-lg fs-15px"
                                   onChange={(event) => this.setState({password: event.target.value})}
                                   placeholder="Enter your password"/>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" value=""
                                       id="customCheck1"/>
                                <label className="custom-control-label fw-500" 
                                        htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button onClick={this.submit} className="btn btn-primary btn-lg btn-block fw-500 mb-3">
                            Log In
                        </button>
                        <div className="text-center">
                            <label>Don’t have an account?</label>
                            <Link to={routers.signup} className="ml-auto text-muted"> Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}