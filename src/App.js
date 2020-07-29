import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import ReactJson from 'react-json-view'

import { addTeacher, addSubject, addClassroom } from './actions/actions'

import './App.css'

const App = (props) => {
	let [form, setForm] = useState({})

	let [subjects, setSubjects] = useState([])

	useEffect(() => {
		if(subjects.length !== props.subjects.length) handleStateSubjects()
	})

	const handleAddTeacher = (e) => {
		e.preventDefault()

		props.addTeacher(addTeacher(form.addTeacherName, form.addTeacherAbbv, form.addTeacherSubjects, form.tt22))
		
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

	const handleTimetableChange = (e) => {
		const timetable = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
		timetable[e.target.getAttribute('day')][e.target.getAttribute('peroid')] = e.target.checked
		console.log(e.target.getAttribute('day'), e.target.value, e.target.checked)
		
		setForm({
			...form,
			timetable
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
					<div>
						<table>
							<tr>
								<th>period</th>
								<th>monday</th>
								<th>tuesday</th>
								<th>wednesday</th>
								<th>thursday</th>
								<th>friday</th>
							</tr>
							<tr>
								<th>0th</th>
								<th><input type='checkbox' id='tt10' name='tt10' value='tt10' day={0} peroid={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt20' name='tt20' value='tt20' day={1} peroid={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt30' name='tt30' value='tt30' /></th>
								<th><input type='checkbox' id='tt40' name='tt40' value='tt40' /></th>
								<th><input type='checkbox' id='tt50' name='tt50' value='tt50' /></th>
							</tr>
							<tr>
								<th>1st</th>
								<th><input type='checkbox' id='tt10' name='tt11' day={0} peroid={1} value='tt11' onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt20' name='tt21' day={1} peroid={1} value='tt21' onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt31' name='tt31' value='tt31' /></th>
								<th><input type='checkbox' id='tt41' name='tt41' value='tt41' /></th>
								<th><input type='checkbox' id='tt51' name='tt51' value='tt51' /></th>
							</tr>
							<tr>
								<th>2nd</th>
								<th><input type='checkbox' id='tt12' name='tt12' value='tt12' /></th>
								<th><input type='checkbox' id='tt22' name='tt22' value='tt22' /></th>
								<th><input type='checkbox' id='tt32' name='tt32' value='tt32' /></th>
								<th><input type='checkbox' id='tt42' name='tt42' value='tt42' /></th>
								<th><input type='checkbox' id='tt52' name='tt52' value='tt52' /></th>
							</tr>
							<tr>
								<th>3rd</th>
								<th><input type='checkbox' id='tt13' name='tt13' value='tt13' /></th>
								<th><input type='checkbox' id='tt23' name='tt23' value='tt23' /></th>
								<th><input type='checkbox' id='tt33' name='tt33' value='tt33' /></th>
								<th><input type='checkbox' id='tt43' name='tt43' value='tt43' /></th>
								<th><input type='checkbox' id='tt53' name='tt53' value='tt53' /></th>
							</tr>
							<tr>
								<th>4th</th>
								<th><input type='checkbox' id='tt14' name='tt14' value='tt14' /></th>
								<th><input type='checkbox' id='tt24' name='tt24' value='tt24' /></th>
								<th><input type='checkbox' id='tt34' name='tt34' value='tt34' /></th>
								<th><input type='checkbox' id='tt44' name='tt44' value='tt44' /></th>
								<th><input type='checkbox' id='tt54' name='tt54' value='tt54' /></th>
							</tr>
							<tr>
								<th>5th</th>
								<th><input type='checkbox' id='tt15' name='tt15' value='tt15' /></th>
								<th><input type='checkbox' id='tt25' name='tt25' value='tt25' /></th>
								<th><input type='checkbox' id='tt35' name='tt35' value='tt35' /></th>
								<th><input type='checkbox' id='tt45' name='tt45' value='tt45' /></th>
								<th><input type='checkbox' id='tt55' name='tt55' value='tt55' /></th>
							</tr>
							<tr>
								<th>6th</th>
								<th><input type='checkbox' id='tt16' name='tt16' value='tt16' /></th>
								<th><input type='checkbox' id='tt26' name='tt26' value='tt26' /></th>
								<th><input type='checkbox' id='tt36' name='tt36' value='tt36' /></th>
								<th><input type='checkbox' id='tt46' name='tt46' value='tt46' /></th>
								<th><input type='checkbox' id='tt56' name='tt56' value='tt56' /></th>
							</tr>
							<tr>
								<th>7th</th>
								<th><input type='checkbox' id='tt17' name='tt17' value='tt17' /></th>
								<th><input type='checkbox' id='tt27' name='tt27' value='tt27' /></th>
								<th><input type='checkbox' id='tt37' name='tt37' value='tt37' /></th>
								<th><input type='checkbox' id='tt47' name='tt47' value='tt47' /></th>
								<th><input type='checkbox' id='tt57' name='tt57' value='tt57' /></th>
							</tr>
							<tr>
								<th>8th</th>
								<th><input type='checkbox' id='tt18' name='tt18' value='tt18' /></th>
								<th><input type='checkbox' id='tt28' name='tt28' value='tt28' /></th>
								<th><input type='checkbox' id='tt38' name='tt38' value='tt38' /></th>
								<th><input type='checkbox' id='tt48' name='tt48' value='tt48' /></th>
								<th><input type='checkbox' id='tt58' name='tt58' value='tt58' /></th>
							</tr>
							<tr>
								<th>9th</th>
								<th><input type='checkbox' id='tt19' name='tt19' value='tt19' /></th>
								<th><input type='checkbox' id='tt29' name='tt29' value='tt29' /></th>
								<th><input type='checkbox' id='tt39' name='tt39' value='tt39' /></th>
								<th><input type='checkbox' id='tt49' name='tt49' value='tt49' /></th>
								<th><input type='checkbox' id='tt59' name='tt59' value='tt59' /></th>
							</tr>
						</table>
					</div>
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
						form: <ReactJson src={form} />
				</div>
				<div>
					 subjects: <ReactJson src={subjects} />
				</div>

				<h1>props</h1>
				<div>
					<h2>classes</h2>
					<ReactJson src={props.classes} />
				</div>
				<div>
					<h2>teachers</h2>
					<ReactJson src={props.teachers} />
				</div>
				<div>
					<h2>classrooms</h2>
					<ReactJson src={props.classrooms} />
				</div>
				<div>
					<h2>subjects</h2>
					<ReactJson src={props.subjects} />
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
		addSubject: (action) => dispatch(action),
		addClassroom: (action) => dispatch(action)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)