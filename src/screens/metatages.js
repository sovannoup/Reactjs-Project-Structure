import React, { Component } from "react"
import MetaTags from "react-meta-tags"

export default class Metatages extends Component {
	constructor(props) {
		super(props)
		this.state = {
			main_page: "",
			main_id: "",
			main_cate: "",
			page: "",
			company_name: "SOVANN NSN",
		}
	}
	componentDidMount() {
		const { location } = this.props
		if (location.pathname === "/") {
			this.setState({
				main_page: "Home",
			})
		} else {
			this.setState({
				main_page: location.pathname.replace(/\//g, "-"),
			})
		}
	}
	componentWillReceiveProps(nextProps, nextState) {
		const { location } = this.props
		if (nextProps.location && nextProps.location != location) {
			if (nextProps.location.pathname === "/") {
				this.setState({
					main_page: "Home",
				})
			} else {
				this.setState({
					main_page: nextProps.location.pathname.replace(/\//g, "-"),
				})
			}
			this.setState({
				page: this.props.location.pathname.split("/")[1],
			})
			console.log(
				'this.props.match.url.splice("/")[1]',
				this.props.location.pathname.split("/")[1]
			)
		}
	}
	render() {
		const { company_name, main_page, page } = this.state
		return (
			<MetaTags>
				<title>{company_name + "  |  " + main_page}</title>
				{/* <link rel="icon" href={require('./../assets/images/company_logo.png')} /> */}
				{/* <meta property="og:image" content={require('./../assets/images/company_logo.png')} /> */}
				<meta property="og:locale" content={""} />
			</MetaTags>
		)
	}
}
