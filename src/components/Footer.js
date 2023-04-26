import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="app-footer">
                © 2023 | The Anti Piracy by <Link>Avinash T</Link>
            </div>
        )
    }
}