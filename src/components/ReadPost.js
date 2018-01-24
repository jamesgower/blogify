import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BlogPostForm from '../components/BlogPostForm';
import moment from 'moment';
import ReadQuillEditor from './ReadQuillEditor';
export class ReadPost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			overview: props.post ? props.post.overview : '',
			body: props.post ? props.post.body : '',
			author: props.post ? props.post.author : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			email: props.post ? props.post.email : '',
			tags: props.post ? props.post.tags : [],
		};
	}

	onUpdate = val => {
		this.setState({
			body: val,
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className="content-container">
					<h1 className="readPost__title">{this.state.title}</h1>
					<ReadQuillEditor passedBody={this.state.body}/>
					<h4> - created by {this.state.author} on {this.state.createdAt.format('Do MMMM YYYY')}</h4>			
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	post: state.posts.find(post => post.id === props.match.params.id),
});

export default connect(mapStateToProps)(ReadPost);
