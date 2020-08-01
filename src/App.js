import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import ReactJson from 'react-json-view'

import { addTeacher, addSubject, addClassroom, addClass } from './actions/actions'

import './App.css'

const App = (props) => {
	let [form, setForm] = useState({
		timetable: [
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false, false, false]
		]
	})

	let [subjects, setSubjects] = useState([])
	let [teachers, setTeachers] = useState([])
	let [classrooms, setClassrooms] = useState([])

	useEffect(() => {
		if(subjects.length !== props.subjects.length) handleStateSubjects()
		if(teachers.length !== props.teachers.length) handleStateTeachers()
		if(classrooms.length !== props.classrooms.length) handleStateClassrooms()
	})

	const handleAddTeacher = (e) => {
		e.preventDefault()

		props.addTeacher(addTeacher(form.addTeacherName, form.addTeacherAbbv, form.addTeacherSubjects, form.timetable))
		
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

	const handleAddClass = (e) => {
		e.preventDefault()

		console.log('whats with the homies who be dissin my boy')
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
		const localTimetable = [...form.timetable]
		
		localTimetable[e.target.getAttribute('day')][e.target.getAttribute('period')] = e.target.checked
		
		setForm({
			...form,
			timetable: localTimetable
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

	const handleStateTeachers = () => {
		setTeachers(Object.assign([], teachers, props.teachers.map(teacher => {
			return ({
				label: teacher.name,
				value: teacher.id
			})
		})))
	}

	const handleStateClassrooms = () => {
		setClassrooms(Object.assign([], classrooms, props.classrooms.map(classroom => {
			return ({
				label: classroom.name,
				value: classroom.id
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
								<th><input type='checkbox' id='tt10' name='tt10' value='tt10' day={0} period={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt20' name='tt20' value='tt20' day={1} period={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt30' name='tt30' value='tt30' day={2} period={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt40' name='tt40' value='tt40' day={3} period={0} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt50' name='tt50' value='tt50' day={4} period={0} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>1st</th>
								<th><input type='checkbox' id='tt10' name='tt11' value='tt11' day={0} period={1} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt20' name='tt21' value='tt21' day={1} period={1} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt31' name='tt31' value='tt31' day={2} period={1} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt41' name='tt41' value='tt41' day={3} period={1} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt51' name='tt51' value='tt51' day={4} period={1} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>2nd</th>
								<th><input type='checkbox' id='tt12' name='tt12' value='tt12' day={0} period={2} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt22' name='tt22' value='tt22' day={1} period={2} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt32' name='tt32' value='tt32' day={2} period={2} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt42' name='tt42' value='tt42' day={3} period={2} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt52' name='tt52' value='tt52' day={4} period={2} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>3rd</th>
								<th><input type='checkbox' id='tt13' name='tt13' value='tt13' day={0} period={3} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt23' name='tt23' value='tt23' day={1} period={3} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt33' name='tt33' value='tt33' day={2} period={3} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt43' name='tt43' value='tt43' day={3} period={3} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt53' name='tt53' value='tt53' day={4} period={3} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>4th</th>
								<th><input type='checkbox' id='tt14' name='tt14' value='tt14' day={0} period={4} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt24' name='tt24' value='tt24' day={1} period={4} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt34' name='tt34' value='tt34' day={2} period={4} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt44' name='tt44' value='tt44' day={3} period={4} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt54' name='tt54' value='tt54' day={4} period={4} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>5th</th>
								<th><input type='checkbox' id='tt15' name='tt15' value='tt15' day={0} period={5} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt25' name='tt25' value='tt25' day={1} period={5} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt35' name='tt35' value='tt35' day={2} period={5} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt45' name='tt45' value='tt45' day={3} period={5} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt55' name='tt55' value='tt55' day={4} period={5} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>6th</th>
								<th><input type='checkbox' id='tt16' name='tt16' value='tt16' day={0} period={6} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt26' name='tt26' value='tt26' day={1} period={6} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt36' name='tt36' value='tt36' day={2} period={6} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt46' name='tt46' value='tt46' day={3} period={6} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt56' name='tt56' value='tt56' day={4} period={6} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>7th</th>
								<th><input type='checkbox' id='tt17' name='tt17' value='tt17' day={0} period={7} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt27' name='tt27' value='tt27' day={1} period={7} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt37' name='tt37' value='tt37' day={2} period={7} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt47' name='tt47' value='tt47' day={3} period={7} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt57' name='tt57' value='tt57' day={4} period={7} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>8th</th>
								<th><input type='checkbox' id='tt18' name='tt18' value='tt18' day={0} period={8} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt28' name='tt28' value='tt28' day={1} period={8} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt38' name='tt38' value='tt38' day={2} period={8} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt48' name='tt48' value='tt48' day={3} period={8} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt58' name='tt58' value='tt58' day={4} period={8} onChange={handleTimetableChange} /></th>
							</tr>
							<tr>
								<th>9th</th>
								<th><input type='checkbox' id='tt19' name='tt19' value='tt19' day={0} period={9} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt29' name='tt29' value='tt29' day={1} period={9} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt39' name='tt39' value='tt39' day={2} period={9} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt49' name='tt49' value='tt49' day={3} period={9} onChange={handleTimetableChange} /></th>
								<th><input type='checkbox' id='tt59' name='tt59' value='tt59' day={4} period={9} onChange={handleTimetableChange} /></th>
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

				<form onSubmit={(e) => {handleAddClass(e)}}>
					<h1>ADD CLASS</h1>
					name: <input type='text' name='addClassName' onChange={(e) => handleChange(e)}></input>
					<h3>cirriculum</h3>
					{props.subjects.map(subject => {
						return (
							<div>
								{subject.name}: 
								<input type='number' key={subject.id}></input>
							</div>
						)
					})}
					<h3>timetable</h3>
					<table>
						<thead>
							<tr>
								<th>peroid</th>
								<th>monday</th>
								<th>tuesday</th>
								<th>wednesday</th>
								<th>thursday</th>
								<th>friday</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1st</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>2nd</td><td>
								<div>
									subject: <Select options={subjects} />
									teacher: <Select options={teachers} />
									classroom: <Select options={classrooms} />
								</div>
							</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								
							</tr>
							<tr>
								<td>3rd</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>4th</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>5th</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>6th</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>7th</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>8th</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
							</tr>
							<tr>
								<td>9th</td><td>
								<div>
									subject: <Select options={subjects} />
									teacher: <Select options={teachers} />
									classroom: <Select options={classrooms} />
								</div>
							</td>
							<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								<td>
									<div>
										subject: <Select options={subjects} />
										teacher: <Select options={teachers} />
										classroom: <Select options={classrooms} />
									</div>
								</td>
								
							</tr>
							
						</tbody>
					</table>
					<button type='submit'>submit</button>
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
				<div>
					 teachers: <ReactJson src={teachers} />
				</div>
				<div>
					 classrooms: <ReactJson src={classrooms} />
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
		addClassroom: (action) => dispatch(action),
		addClass: (action) => dispatch(action)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)