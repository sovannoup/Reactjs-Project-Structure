import { routerReducer } from "react-router-redux"
import appReducer from "../modules/app/reducer"
import userReducer from "../modules/user/reducer"
import homeReducer from "../modules/home/reducer"

export default {
	app: appReducer,
	user: userReducer,
	router: routerReducer,
	home: homeReducer,
}
