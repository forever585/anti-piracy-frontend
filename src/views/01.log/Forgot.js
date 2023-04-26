import React, {Component} from "react";

export default class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    submit = () => {
        console.log(this.state.email)

        window.location.href="/";
    };

    render() {
        return (
            <div className="app app-full-height app-without-header">
                <div className="login">
                    <div className="login-content">
                        <div align="center">
                            <img align="center" img="" style={{width: "100px", height: "auto"}}
                                 src="./logo.png"
                                 alt="img"/>
                        </div>
                        <hr/>
                        <h1 className="text-center">Change Password</h1>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input onChange={(event) => this.setState({email: event.target.value})} type="email"
                                   placeholder="input Email"
                                   className="form-control"/><br/><br/>

                        </div>
                        <button onClick={this.submit} className="btn btn-primary btn-lg btn-block fw-500 mb-3">Send
                            Password Reset Email
                        </button>

                    </div>
                </div>
                <a href="#" data-click="scroll-top" className="btn-scroll-top fade"><i
                    className="fa fa-arrow-up"/></a>
            </div>
        )
    }
}