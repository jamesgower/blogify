import React from 'react';
import { connect } from 'react-redux';
import BlogPostListItem from './BlogPostListItem';
import { selectPosts } from '../selectors/posts';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export class BlogPostList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageNum: 1,
		};
	}

	renderPosts(pageNum) {
		let posts = this.props.posts;
		let start = pageNum === 1 ? 0 : (pageNum - 1) * 5;
		let end = start + 5;
		return posts.slice(start, end).map(post => {
			return <BlogPostListItem key={post.id} {...post} />;
		});
	}

	render() {
		return (
			<div className="content-container">
				{this.props.posts.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No posts</span>
					</div>
				) : (
					this.renderPosts(this.state.pageNum)
				)}
				<Pagination size="lg" className="pages">
					<PaginationItem>
						<PaginationLink
							previous
							onClick={() =>
								this.setState({
									pageNum: this.state.pageNum > 1 ? this.state.pageNum - 1 : this.state.pageNum,
								})
							}
						/>
					</PaginationItem>
					<PaginationItem active={this.state.pageNum === 1}>
						<PaginationLink onClick={() => this.setState({ pageNum: 1 })}>1</PaginationLink>
					</PaginationItem>
					{this.props.postCount > 5 && (
						<PaginationItem active={this.state.pageNum === 2}>
							<PaginationLink onClick={() => this.setState({ pageNum: 2 })}>2</PaginationLink>
						</PaginationItem>
					)}
					{this.props.postCount > 10 && (
						<PaginationItem active={this.state.pageNum === 3}>
							<PaginationLink onClick={() => this.setState({ pageNum: 3 })}>3</PaginationLink>
						</PaginationItem>
					)}
					{this.props.postCount > 15 && (
						<PaginationItem active={this.state.pageNum === 4}>
							<PaginationLink onClick={() => this.setState({ pageNum: 4 })}>4</PaginationLink>
						</PaginationItem>
					)}
					{this.props.postCount > 20 && (
						<PaginationItem active={this.state.pageNum === 5}>
							<PaginationLink onClick={() => this.setState({ pageNum: 5 })}>5</PaginationLink>
						</PaginationItem>
					)}
					<PaginationItem>
						<PaginationLink
							next
							onClick={() =>
								this.setState({
									pageNum:
										this.state.pageNum < this.props.noPages
											? this.state.pageNum + 1
											: this.state.pageNum,
								})
							}
						/>
					</PaginationItem>
				</Pagination>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const visiblePosts = selectPosts(state.posts, state.filters);
	const noPages = Math.ceil(visiblePosts.length / 5);

	return {
		postCount: visiblePosts.length,
		noPages,
		posts: selectPosts(state.posts, state.filters),
		auth: state.auth,
	};
};

export default connect(mapStateToProps)(BlogPostList);
