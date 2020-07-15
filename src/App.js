import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const App = (props) => {
	useEffect(() => {
		console.log(props.classes)
	})

	return (
		<div>
		yee
		</div>
	)
}


const mapStateToProps = state => {
  return {
    classes: state.classes
  }
}

export default connect(mapStateToProps)(App)