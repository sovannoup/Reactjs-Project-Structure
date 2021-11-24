import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router"
import App from "./App"
// import MapContainer from './component/googleMap';
import store from "./store"
import { persistor } from "./store"
import * as serviceWorker from "./serviceWorker"
import { PersistGate } from "redux-persist/integration/react"
import GlobalStyle from "./style/GlobalStyle"
import Typography from "./style/Typography"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<GlobalStyle />
					<Typography />
					<App />
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
