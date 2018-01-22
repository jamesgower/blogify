import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPosts } from '../selectors/posts';


export const SearchPostSummary = ({ postCount }) => {
	const postWord = postCount === 1 ? 'post' : 'posts';
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{postCount}</span> {postWord}.
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">
						Add Post
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visiblePosts = selectPosts(state.search, state.filters);

	return {
		postCount: visiblePosts.length
	};
};

export default connect(mapStateToProps)(SearchPostSummary);