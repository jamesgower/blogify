const searchReducerDefaultState = [];
export default(state = searchReducerDefaultState, action) => {
	switch(action.type) {
	case 'SET_ALL_POSTS':
		return action.posts;
	default:
		return state;
	}
};