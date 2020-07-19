import React, { useState } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import { addTeacher, addSubject, addClassroom } from './actions/actions'

import './App.css'

const App = (props) => {
	let [form, setForm] = useState({
		name: '',
		abbv: ''
	})
	
	const handleAddTeacher = (e) => {
		e.preventDefault()

		props.addTeacher(addTeacher(form.addTeacherName, form.addTeacherAbbv, 'pussy', 'cat doll'))
	}

	const handleAddSubject = (e) => {
		e.preventDefault()

		props.addSubject(addSubject(form.addSubjectName))
	}

	const handleAddClassroom = (e) => {
		e.preventDefault()

		props.addClassroom(addClassroom)
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className='appContainer'>
			<div className='left'>
				<form onSubmit={(e) => handleAddTeacher(e)}>
					<h1>ADD TEACHER</h1>
					<input type='text' name='addTeacherName' onChange={(e) => handleChange(e)}></input>
					<input type='text' name='addTeacherAbbv' onChange={(e) => handleChange(e)}></input>
					<div>subjects</div>
					<div>schedule</div>
					<button type='submit'>submit</button>
				</form>

				<form onSubmit={(e) => handleAddSubject(e)}>
					<h1>ADD SUBJECT</h1>
					<input type='text' name='addSubjectName' onChange={(e) => handleChange(e)}></input>
					<button type='submit'>submit</button>
				</form>

				<form onSubmit={(e) => handleAddClassroom(e)}>
					<h1>ADD CLASSROOM</h1>
					<Select options={[
						{ label: 'i wanna', value: 'i wanna' },
						{ label: 'kill myself', value: 'kill myself'}
					 ]} />
				</form>
			</div>

			<div className='right'>
				<div>
						{JSON.stringify(form)}
				</div>
				<div>
					<h1>classes</h1>
					{JSON.stringify(props.classes)}
				</div>
				<div>
					<h1>teachers</h1>
					{JSON.stringify(props.teachers)}
				</div>
				<div>
					<h1>classrooms</h1>
					{JSON.stringify(props.classrooms)}
				</div>
				<div>
					<h1>subjects</h1>
					{JSON.stringify(props.subjects)}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
  return {
    classes: state.classes,
    teachers: state.teachers,
    classrooms: state.classrooms,
    subjects: state.subjects
  }
}

const mapDispatchToProps = dispatch => {
	return {
		addTeacher: (action) => dispatch(action),
		addSubject: (action) => dispatch(action)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)