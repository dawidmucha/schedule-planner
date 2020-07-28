import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Select from 'react-select'
import JSONFormatter from 'json-formatter-js'
import ReactJson from 'react-json-view'

import { addTeacher, addSubject, addClassroom } from './actions/actions'

import './App.css'

const App = (props) => {
	let [form, setForm] = useState({ "points the": "finger" })

	let [subjects, setSubjects] = useState([])

	const formFormatted = new JSONFormatter(form)

	useEffect(() => {
		if(subjects.length !== props.subjects.length) handleStateSubjects()

		console.log(formFormatted.render())
		console.log(Object.values(formFormatted.render()))
	})

	const handleAddTeacher = (e) => {
		e.preventDefault()

		props.addTeacher(addTeacher(form.addTeacherName, form.addTeacherAbbv, form.addTeacherSubjects, 'cat doll'))
		
		handleStateSubjects()
	}

	const handleAddSubject = (e) => {
		e.preventDefault()
		
		props.addSubject(addSubject(form.addSubjectName))
	}

	const handleAddClassroom = (e) => {
		e.preventDefault()

		console.log(form.addClassroomName, form.addClassroomSubjects)
		props.addClassroom(addClassroom(form.addClassroomName, form.addClassroomSubjects))
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleAddClassroomSelectChange = (e) => {		
		setForm({
			...form,
			addClassroomSubjects: e
		})
	}

	const handleAddTeacherSelectChange = (e) => {		
		setForm({
			...form,
			addTeacherSubjects: e
		})
	}

	const handleStateSubjects = () => {
		setSubjects(Object.assign([], subjects, props.subjects.map(subject => {
			return ({
				label: subject.name,
				value: subject.id
			})
		})))
	}

	return (
		<div className='appContainer'>
			<div className='left'>
				<form onSubmit={(e) => handleAddTeacher(e)}>
					<h1>ADD TEACHER</h1>
					name: <input type='text' name='addTeacherName' onChange={(e) => handleChange(e)}></input>
					abbv: <input type='text' name='addTeacherAbbv' onChange={(e) => handleChange(e)}></input>
					subjects: <Select isMulti options={subjects} onChange={(e) => handleAddTeacherSelectChange(e)} />
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
					name: <input type='text' name='addClassroomName' onChange={(e) => handleChange(e)}></input>
					subjects: <Select isMulti options={subjects} onChange={(e) => handleAddClassroomSelectChange(e)} />
					<button onClick={handleStateSubjects}>magic</button>
				</form>
			</div>

			<div className='right'>
				<h1>state</h1>
				<div id='pussy'>
						form: {JSON.stringify(form)}
						<ReactJson src={form} />
				</div>
				<div>
					 subjects: {JSON.stringify(subjects)}
				</div>

				<h1>props</h1>
				<div>
					<h2>classes</h2>
					{JSON.stringify(props.classes)}
				</div>
				<div>
					<h2>teachers</h2>
					{JSON.stringify(props.teachers)}
				</div>
				<div>
					<h2>classrooms</h2>
					{JSON.stringify(props.classrooms)}
				</div>
				<div>
					<h2>subjects</h2>
					{JSON.stringify(props.subjects)}
				</div>
			</div>
		</div>
	)
}

const Form = (props) => {
	return (
		props
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
		addSubject: (action) => dispatch(action),
		addClassroom: (action) => dispatch(action)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)