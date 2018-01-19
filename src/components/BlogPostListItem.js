import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import getTags from '../selectors/tags';

const BlogPostListItem = ({ id, title, overview, tags, author, email, createdAt }) => {
	return (
		<Link className="list-item" to={`edit/${id}`}>
			<div>
				<h3 className="list-item__title">{title}</h3>
				<h4>{overview}</h4>
				<h5>
					Written by {author} on
					<span className="list-item__subtitle"> {moment(createdAt).format('DD MMMM, YYYY')}</span>
				</h5>
				<h6 className="list-item__email"> -{email}</h6>
				<div className="list-item__tags"> {tags.map((tag) => <label className='react-tags' key={tag}> {tag} </label>)} </div>
			</div>
		</Link>
	);
};

export default BlogPostListItem;
