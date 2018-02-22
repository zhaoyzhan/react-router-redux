const initState = {
	carValue: 0
};

const carDefault = (state) => state;

const carAdd = (state, action) => {
	const {
		payload
	} = action;
	return Object.assign({}, state, {
		carValue: payload,
	});
};

const carRef = (state, action) => {
	const {
		payload
	} = action;
	return Object.assign({}, state, {
		carValue: payload,
	});
};

const carReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TEST::change':
			localStorage.setItem('carVal', action.payload);
			console.log(action);
			return carAdd(state, action);
		case 'TEST::ref':
			return carRef(state, action);
		case 'TEST::def':
			return carRef(state, action);
		default:
			return carDefault(state, action);
	}
};

export default carReducer;