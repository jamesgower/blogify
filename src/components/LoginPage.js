import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithFacebook, startLoginWithGoogle } from '../actions/auth';
import { Link } from 'react-router-dom';
import { startGetAllPosts } from '../actions/search';

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
					<button className="button button__login--google" onClick={this.props.startLoginWithGoogle}>
						Login With Google
					</button>
					<button className="button button__login--facebook" onClick={this.props.startLoginWithFacebook}>
						Login With Facebook
					</button>
					<Link to="/search" className="button" onClick={this.props.startGetAllPosts}>
						Search
					</Link>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
	startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
	startGetAllPosts: () => dispatch(startGetAllPosts()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
