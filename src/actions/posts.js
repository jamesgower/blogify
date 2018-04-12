import database from '../firebase/firebase';

export const addPost = post => ({
	type: 'ADD_POST',
	post,
});

export const startAddPost = (postData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const { title = '', overview = '', body = '', author = '', email = '', tags = [], createdAt = 0, userId = uid } = postData;
		const post = { title, overview, body, author, email, tags, createdAt, userId };

		return database
			.ref(`users/${uid}/posts`)
			.push(post)
			.then(ref => {
				dispatch(
					addPost({
						id: ref.key,
						...post,
					})
				);
			});
	};
};

export const removePost = ({ id } = {}) => ({
	type: 'REMOVE_POST',
	id,
});

export const startRemovePost = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/posts/${id}`)
			.remove()
			.then(() => {
				dispatch(removePost({ id }));
			});
	};
};

export const editPost = (id, updates) => ({
	type: 'EDIT_POST',
	id,
	updates,
});

export const startEditPost = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/posts/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editPost(id, updates));
			});
	};
};

export const setPosts = posts => ({
	type: 'SET_POSTS',
	posts,
});


export const startSetPosts = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/posts`)
			.once('value')
			.then(snapshot => {
				const posts = [];

				snapshot.forEach(childSnapshot => {
					posts.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				dispatch(setPosts(posts));
			});
	};
};

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


