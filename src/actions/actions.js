const addTeacher = (name, abbv, subjects, schedule) => {
	return {
		type: 'ADD_TEACHER',
		payload: {
			name, abbv, subjects, schedule
		}
	}
}

export { addTeacher }