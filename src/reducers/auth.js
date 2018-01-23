export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.uid,
				loggedIn: true
			};
		case 'LOGOUT':
			return {
				loggedIn: false
			};
		default:
			return state;
	}
};
