import React from 'react';
import BlogPostSummary from './BlogPostSummary';
import BlogPostListFilters from './BlogPostListFilters';
import BlogPostList from './BlogPostList';
import SearchPostsList from './SearchPostsList';

const SearchDashboardPage = () => (
	<div>
		<BlogPostSummary />
		<BlogPostListFilters />
		<SearchPostsList />
	</div>
);

export default SearchDashboardPage;