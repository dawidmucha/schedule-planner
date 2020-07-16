import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTeacher } from './actions/actions'

const App = (props) => {
	let [form, setForm] = useState({
		name: '',
		abbv: ''
	})
	
	const handleAddTeacher = (e) => {
		e.preventDefault()

		props.addTeacher(addTeacher(form.name, form.abbv, 'pussy', 'cat doll'))
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			<form onSubmit={(e) => handleAddTeacher(e)}>
				<h1>ADD TEACHER</h1>
				<input type='text' name='name' onChange={(e) => handleChange(e)}></input>
				<input type='text' name='abbv' onChange={(e) => handleChange(e)}></input>
				<div>subjects</div>
				<div>schedule</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  }
}

const mapDispatchToProps = dispatch => {
	return {
		addTeacher: (action) => dispatch(action)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)