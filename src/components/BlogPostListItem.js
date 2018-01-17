import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import getTags from '../selectors/tags';

const BlogListItem = ({ id, title, body, tags, author, email, createdAt }) => {
	return (
		<Link className="list-item" to={`edit/${id}`}>
			<div>
				<h3 className="list-item__title">{title}</h3>
				<h5>
					Written by {author} on
					<span className="list-item__subtitle"> {moment(createdAt).format('do MMMM, YYYY')}</span> - {email}
				</h5>
				<div className="list-item__right"> {tags.map((tag) => <label className='react-tags' key={tag}> {tag} </label>)} </div>

			</div>
		</Link>
	);
};

export default BlogListItem;
