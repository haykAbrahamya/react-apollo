import React from "react"
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { routes } from "../../../config/routes"



export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          Object.values(routes).map(route => (
            <Route
              key={route.id}
              path={route.path}
              component={route.component}
            />
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}