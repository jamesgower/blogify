import React from 'react';
import { connect } from 'react-redux';
import BlogPostListItem from './BlogPostListItem';
import { selectPosts } from '../selectors/posts';

export class BlogPostList extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="content-container">
				<div className="list-header">
					<div>Post</div>
				</div>
				<div className="list-body">
					{this.props.auth.uid === undefined ? (
						this.props.search.length === 0 ? (
							<div className="list-item list-item--message">
								<span>No posts</span>
							</div>
						) : (
							this.props.search.map(post => {
								return <BlogPostListItem key={post.id} {...post} />;
							})
						)
					) : this.props.posts.length === 0 ? (
						<div className="list-item list-item--message">
							<span>No posts</span>
						</div>
					) : (
						this.props.posts.map(post => {
							return <BlogPostListItem key={post.id} {...post} />;
						})
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: selectPosts(state.posts, state.filters),
		auth: state.auth,
		search: selectPosts(state.search, state.filters),
	};
};

export default connect(mapStateToProps)(BlogPostList);
