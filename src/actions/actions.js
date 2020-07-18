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

export { addTeacher, addSubject }