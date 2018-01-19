import database from '../firebase/firebase';

export const startGetAllPosts = () => {
	return dispatch => {
		database
			.ref('users')
			.once('value')
			.then(snapshot => {
				let posts = [];

				snapshot.forEach(childSnapshot => {
					childSnapshot.forEach(id => {
						id.forEach(post => {
							posts.push({
								id: post.key, ...post.val()
							});
						});
					});
				});
				dispatch(setAllPosts(posts));
			});
	};
};

export const setAllPosts = posts => ({
	type: 'SET_ALL_POSTS',
	posts,
});
