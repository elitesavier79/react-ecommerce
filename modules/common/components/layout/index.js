import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles ({
	content: {
		marginTop:74
	}

})

const Layout = ({ children }) => {
  const classes = useStyles()

	return (
		<React.Fragment>
		  <div className={classes.content}>
		  	{children}
		  </div>
		</React.Fragment>
		)
}

Layout.propTypes ={
	children: PropTypes.oneofType({
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	})
}

export default Layout