import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAaTT2IEvsS0RiT82aUQHtqtA7-MN-olVo",
	authDomain: "react-16-blog.firebaseapp.com",
	databaseURL: "https://react-16-blog.firebaseio.com",
	projectId: "react-16-blog",
	storageBucket: "react-16-blog.appspot.com",
	messagingSenderId: "688488618130"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider, database as default };