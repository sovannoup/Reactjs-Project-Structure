import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../styles/PublicUser.css";
import NavMenu from "../components/navMenu"

export default class PublicUserHome extends Component {
	componentDidMount() {}
	render() {
		return (
			<div>
				<div className="container">
					<NavMenu />
				</div>
			</div>
		)
	}
}
