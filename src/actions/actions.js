const addTeacher = (name, abbv, subjects, schedule) => {
	return {
		type: 'ADD_TEACHER',
		payload: {
			name, abbv, subjects, schedule
		}
	}
}

const addSubject = (name) => {
	return {
		type: 'ADD_SUBJECT',
		payload: {
			name
		}
	}
}

const addClassroom = (name, subjects) => {
	return {
		type: 'ADD_CLASSROOM',
		payload: {
			name,
			subjects
		}
	}
}

const addClass = (name, timetable, cirriculum) => {
	return {
		type: 'ADD_CLASS',
		payload: {
			name,
			timetable,
			cirriculum
		}
	}
}

export { addTeacher, addSubject, addClassroom, addClass }