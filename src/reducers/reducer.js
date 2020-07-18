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

		default: return state
	}
}

export default reducer