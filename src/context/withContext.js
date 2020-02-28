import React from "react"
import {GlobalConsumer  } from "./GlobalState"

export const withContext = Component => {
  return props => (
    <GlobalConsumer>
      {value => <Component {...props} value={value} />}
    </GlobalConsumer>
  )
}
