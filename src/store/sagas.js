import { all } from "redux-saga/effects"
import { appSaga } from "../modules/app"
import { userSaga } from "../modules/user"
import { homeSaga } from "../modules/home"

const sagas = [appSaga(), userSaga(), homeSaga()]

export default function* () {
	yield all(sagas)
}
