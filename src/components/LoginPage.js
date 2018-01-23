import React from 'react';
import { connect } from 'react-redux';
import {
	startLoginWithFacebook,
	startLoginWithGoogle,
	startLoginWithGithub,
	startLoginWithTwitter,
} from '../actions/auth';
import { Link } from 'react-router-dom';
import { startGetAllPosts } from '../actions/posts';

export class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="box-layout">
				<div className="box-layout__box">
					<h1 className="box-layout__title">Boilerplate</h1>
					<p>Tag line for app</p>
					<button onClick={this.props.startLoginWithGoogle} className="button__login button__login--google">
						<i className="fa fa-google" aria-hidden="true" />Login With Google
					</button>
					<button
						onClick={this.props.startLoginWithFacebook}
						className="button__login button__login--facebook"
					>
						<i className="fa fa-facebook" aria-hidden="true" />Login With Facebook
					</button>
					<button onClick={this.props.startLoginWithTwitter} className="button__login button__login--twitter">
						<i className="fa fa-twitter" aria-hidden="true" />Login With Twitter
					</button>
					<button onClick={this.props.startLoginWithGithub} className="button__login button__login--github">
						<i className="fa fa-github" aria-hidden="true" />Login With GitHub
					</button>
					<Link to="/dashboard" className="button button__login" onClick={this.props.startGetAllPosts}>
						<i className="fa fa-search" />Search
					</Link>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
	startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
	startLoginWithGithub: () => dispatch(startLoginWithGithub()),
	startLoginWithTwitter: () => dispatch(startLoginWithTwitter()),
	startGetAllPosts: () => dispatch(startGetAllPosts()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
