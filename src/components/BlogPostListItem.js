import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItem = ({ id, title, body, tags, author, email, createdAt }) => {
	return (
		<Link className="list-item" to={`edit/${id}`}>
			<div>
				<h3 className="list-item__title">{title}</h3>
				<h5>
					Written by {author} on{createdAt}
					<span className="list-item__subtitle">{moment(createdAt).format('do MMMM, YYYY')}</span>
				</h5>
				<h1>{tags}</h1>
			</div>
		</Link>
	);
};

export default BlogListItem;