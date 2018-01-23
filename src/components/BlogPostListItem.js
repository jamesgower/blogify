import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import getTags from '../selectors/tags';

export class BlogPostListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link className="list-item" to={this.props.auth.uid ? `edit/${this.props.id}` : `read/${this.props.id}`}>
				<div>
					<h3 className="list-item__title">{this.props.title}</h3>
					<h4>{this.props.overview}</h4>
					<h5>
						Written by {this.props.author} on
						<span className="list-item__subtitle"> {moment(this.props.createdAt).format('DD MMMM, YYYY')}</span>
					</h5>
					<h6 className="list-item__email"> -{this.props.email}</h6>
					<div className="list-item__tags"> {this.props.tags.map((tag) => <label className='react-tags' key={tag}> {tag} </label>)} </div>
				</div>
			</Link>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStateToProps)(BlogPostListItem);