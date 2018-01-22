import React from 'react';
import BlogPostListFilters from './BlogPostListFilters';
import SearchPostsList from './SearchPostsList';
import Header from './Header';
import SearchPostSummary from './SearchPostSummary';

const SearchDashboardPage = () => (
	<div>
		<Header />
		<SearchPostSummary />
		<BlogPostListFilters />
		<SearchPostsList />
	</div>
);

export default SearchDashboardPage;