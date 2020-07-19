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

export { addTeacher, addSubject, addClassroom }