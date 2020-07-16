import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Hideouts from "./pages/Hideouts"

const routes = [{ path: "/hideouts", component: Hideouts, exact: true }]

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
