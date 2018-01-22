import React from 'react';
import { connect } from 'react-redux';
import BlogPostSummary from './BlogPostSummary';
import BlogPostListFilters from './BlogPostListFilters';
import BlogPostList from './BlogPostList';
import Header from './Header';
import SearchSummary from './SearchSummary';

export class BlogDashboardPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				{ this.props.auth.uid ? <BlogPostSummary/> : <SearchSummary /> }
				<BlogPostListFilters />
				<BlogPostList />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(BlogDashboardPage);
