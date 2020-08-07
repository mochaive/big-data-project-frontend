import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "./App"
import Main from "./pages/Home"

ReactDOM.render(
    <Router>
        <App />
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                {/* <Route path="/analysis" component={Analysis} /> */}
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
)

serviceWorker.unregister()
