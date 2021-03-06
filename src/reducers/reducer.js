import uniqid from 'uniqid'

const initState = {
	classes: [],
	teachers: [],
	classrooms: [],
	subjects: []
}

const reducer = (state = initState, action) => {
	switch(action.type) {
		case 'ADD_TEACHER':
			return Object.assign({}, state, {
				teachers: state.teachers.concat({
					id: uniqid(),
					name: action.payload.name,
					abbv: action.payload.abbv,
					subjects: action.payload.subjects,
					schedule: action.payload.schedule
				})
			})

		case 'ADD_SUBJECT': {
			return Object.assign({}, state, {
				subjects: state.subjects.concat({
					id: uniqid(),
					name: action.payload.name
				})
			})
		}

		case 'ADD_CLASSROOM': {
			return Object.assign({}, state, {
				classrooms: state.classrooms.concat({
					id: uniqid(),
					name: action.payload.name,
					subjects: action.payload.subjects
				})
			})
		}

		case 'ADD_CLASS': {
			return Object.assign({}, state, {
				class: state.class.concat({
					id: uniqid(),
					name: action.payload.name,
					timetable: action.payload.timetable,
					cirriculum: action.payload.cirriculum
				})
			})
		}

		default: return state
	}
}

export default reducer