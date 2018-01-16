import React from 'react';
import moment from 'moment';

export default class BlogPostForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			body: props.post ? props.post.body : '',
			author: props.post ? props.post.author : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			email: props.post ? props.post.email : ''
		};
	}

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({title}));
	}

	onBodyChange = (e) => {
		const body = e.target.value;
		this.setState(() => ({body}));		
	}

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState(() => ({author}));		
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({email}));		
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			body: this.state.body,
			author: this.state.author,
			email: this.state.email
		});
	}

	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="text-input"
					placeholder=""
					autoFocus
					value={this.state.title}
					onChange={this.onTitleChange}
				/>
				<input
					type="text"
					className="text-input"
					placeholder=""
					value={this.state.body}
					onChange={this.onBodyChange}
				/>
				<input
					type="text"
					className="text-input"
					placeholder=""
					value={this.state.author}
					onChange={this.onAuthorChange}
				/>
				<input
					type="text"
					className="text-input"
					placeholder=""
					value={this.state.email}
					onChange={this.onEmailChange}
				/>
				<button className="button">
					Add Post
				</button>
			</form>
		);
	}
}