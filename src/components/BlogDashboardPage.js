import React from 'react';
import BlogPostSummary from './BlogPostSummary';
import BlogPostListFilters from './BlogPostListFilters';
import BlogPostList from './BlogPostList';

const BlogDashboardPage = () => (
	<div>
		<BlogPostSummary />
		<BlogPostListFilters />
		<BlogPostList />
	</div>
);

export default BlogDashboardPage;
