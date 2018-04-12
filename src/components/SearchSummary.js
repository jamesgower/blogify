import React from 'react';
import { connect } from 'react-redux';
import { selectPosts } from '../selectors/posts';

const SearchSummary = props => (
	<div className="page-header">
		<div className="content-container">
			<h1 className="page-header__title">
				Viewing <span>{props.postCount}</span> posts from all users
			</h1>
			<h3 className="summary__subtitle">
				You are currently viewing posts from the start of the year. The filter can be changed to suit your
				needs.
			</h3>
			<h3 className="summary__subtitle" style={{marginBottom: '10px'}}>To make your own posts, simply Login with any social media account</h3>
		</div>
	</div>
);

const mapStateToProps = state => {
	const myVisiblePosts = selectPosts(state.posts, state.filters);
	return {
		postCount: myVisiblePosts.length,
	};
};

export default connect(mapStateToProps)(SearchSummary);
