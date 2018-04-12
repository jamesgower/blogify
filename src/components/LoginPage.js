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
					<h1 className="box-layout__title" style={{fontSize: '30px', marginBottom: '14px', fontWeight: '600'}}>Blogify</h1>
					<p style={{fontSize: '15px', marginBottom: '18px'}}>Let the world know what you're up to.</p>
					<button onClick={this.props.startLoginWithGoogle} className="button__login button__login--google">
						<i className="fa fa-google" aria-hidden="true" />
					</button>
					<button
						onClick={this.props.startLoginWithFacebook}
						className="button__login button__login--facebook"
					>
						<i className="fa fa-facebook" aria-hidden="true"/>
					</button>
					<button onClick={this.props.startLoginWithTwitter} className="button__login button__login--twitter">
						<i className="fa fa-twitter" aria-hidden="true" />
					</button>
					<button onClick={this.props.startLoginWithGithub} className="button__login button__login--github" style={{marginBottom: '18px'}}>
						<i className="fa fa-github" aria-hidden="true" />
					</button>
					<h5 style={{marginBottom: '10px'}}>Login with any social media or search all posts below</h5>
					
					<Link to="/dashboard" className="button" onClick={this.props.startGetAllPosts} style={{textDecoration: 'none', color: 'white'}}>
						<i className="fa fa-search" /> Search
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
