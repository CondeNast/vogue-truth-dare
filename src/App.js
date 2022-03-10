import React from "react"
import withStyles from "react-jss"
import fonts from "./assets/fonts"
import globalStyles from "./data/globalStyles"
import { Quiz } from "./layouts"

const styles = {
  ...fonts,
  ...globalStyles,
  app: {},
}

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <Quiz />
    </div>
  )
}

export default withStyles(styles)(App)
