import React from 'react';
import { connect } from 'react-redux';
import BlogPostForm from './BlogPostForm';
import { startAddPost } from '../actions/posts';

export class AddPostPage extends React.Component {
	onSubmit = post => {
		this.props.startAddPost(post);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Post</h1>
					</div>
				</div>
				<div className="content-container">
					<BlogPostForm
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
