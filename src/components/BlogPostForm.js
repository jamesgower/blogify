import React from 'react';
import moment from 'moment';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';

export default class BlogPostForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			body: props.post ? props.post.body : '',
			author: props.post ? props.post.author : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			email: props.post ? props.post.email : '',
			tags: props.post ? props.post.tags : []
		};
	}

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({title}));
	}

	handleChange = (value) => {
		this.setState(() => ({ body: value }));
	}

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState(() => ({author}));		
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({email}));		
	}

	handleTagChange = (tags) => {
		this.setState(() => ({ tags }));
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			body: this.state.body,
			author: this.state.author,
			email: this.state.email,
			createdAt: this.state.createdAt.valueOf(),
			tags: this.state.tags
		});
	}

	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="text-input"
					placeholder="Title"
					autoFocus
					value={this.state.title}
					onChange={this.onTitleChange}
				/>
				<ReactQuill value={this.state.body} onChange={this.handleChange} className="editor" />

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
				<TagsInput value={this.state.tags} onChange={this.handleTagChange} />
				<button className="button">
					Add Post
				</button>
			</form>
		);
	}
}