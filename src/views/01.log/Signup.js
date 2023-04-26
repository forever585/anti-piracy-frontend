import React, {Component} from "react";
import {Link} from "react-router-dom";
import {routers} from "../../data/config";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            password: "",
        };
    }

    submit = () => {
        console.log(this.state.name, this.state.email, this.state.password)

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
                            <label>Display Name</label>
                            <input type="text"
                                   onChange={(event) => this.setState({name: event.target.value})}
                                   className="form-control form-control-lg fs-15px" name="name"
                                   placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input data-validate="Valid email is required: ex@abc.xyz" type="email"
                                   onChange={(event) => this.setState({email: event.target.value})}
                                   className="form-control form-control-lg fs-15px" name="email"
                                   placeholder="username@address.com"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-lg fs-15px"
                                   onChange={(event) => this.setState({password: event.target.value})}
                                   placeholder="Enter your password"/>
                        </div>
                        <button onClick={this.submit} className="btn btn-primary btn-lg btn-block fw-500 mb-3">
                            Sign up
                        </button>
                        <div className="text-center">
                            <label>Already have an account?</label>
                            <Link to={routers.login} className="ml-auto text-muted"> Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}