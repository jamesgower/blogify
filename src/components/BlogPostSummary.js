import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPosts } from '../selectors/posts';

export class BlogPostSummary extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const postWord = this.props.postCount === 1 ? 'post' : 'posts';
		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">
						Viewing <span> { this.props.postCount}</span> {postWord}.
					</h1>
					<div className="page-header__actions">
						<Link className="button" to="/create">
							Add Post
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const myVisiblePosts = selectPosts(state.posts, state.filters);
	return {
		postCount: myVisiblePosts.length,
		auth: state.auth,
	};
};

export default connect(mapStateToProps)(BlogPostSummary);
