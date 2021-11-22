import { connect } from "react-redux"
import HomeScreen from "../screens/integrated_pages/PublicUserHome"
import { userLogin } from "../modules/user/reducer"

const mapStateToProps = (state) => ({
	...state,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
