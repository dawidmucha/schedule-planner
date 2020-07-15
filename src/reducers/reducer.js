const initState = {
	classes: [
		{
			name: 'classA1',
			monday: [
				{
					class: "chemistry",
					teacher: "BR",
					classroom: "302",
				},
				{},
				{
					class: "math",
					teacher: "AG",
					classroom: "1B"
				},
				{
					class: "math",
					teacher: "AG",
					classroom: "1B"
				}
			],
			tuesday: [
				{},
				{},
				{},
				{},
				{},
				{
					class: "pe",
					teacher: "AA",
					classroom: "GYM"
				}
			]				
		},
		{
			name: 'classB2',
			wednesday: [
				{
					class: "pe",
					teacher: "AA",
					classroom: "GYM"
				}
			]
		}
	]
}

const reducer = (state = initState, action) => {
	switch(action.type) {
		default: return state
	}
}

export default reducer