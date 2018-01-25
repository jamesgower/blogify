import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
import { SingleDatePicker } from 'react-dates';
import QuillEditor from './QuillEditor';
import { startRemovePost } from '../actions/posts';
import { Link } from 'react-router-dom';

export class BlogPostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.post ? props.post.id : '',
			title: props.post ? props.post.title : '',
			overview: props.post ? props.post.overview : '',
			body: props.post ? props.post.body : '',
			author: props.post ? props.post.author : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			email: props.post ? props.post.email : '',
			tags: props.post ? props.post.tags : [],
			calendarFocused: false,
			error: '',
			openDirection: 'up',
		};
	}

	onRemove = () => {
		this.props.startRemovePost({ id: this.state.id });
	};

	onUpdate = val => {
		this.setState({
			body: val,
		});
	};

	onTitleChange = e => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};

	onAuthorChange = e => {
		const author = e.target.value;
		this.setState(() => ({ author }));
	};

	onEmailChange = e => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};

	handleTagChange = tags => {
		this.setState(() => ({ tags }));
	};

	onOverviewChange = e => {
		const overview = e.target.value;
		this.setState(() => ({ overview }));
	};

	//Date Picker
	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.tags.length === 0) {
			const tagsInput = document.getElementById('tags-input');
			this.setState(() => ({ error: 'Please provide at least one tag' }));
			tagsInput.className = 'form-error';
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				title: this.state.title,
				overview: this.state.overview,
				body: this.state.body,
				author: this.state.author,
				email: this.state.email,
				createdAt: this.state.createdAt.valueOf(),
				tags: this.state.tags,
			});
		}
	};
	render() {
		return (
			<div>
				<form className="form" onSubmit={this.onSubmit}>
					<input
						type="text"
						className="text-input"
						placeholder="Title"
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<input
						type="text"
						className="text-input"
						placeholder="Enter the overview of the current post"
						value={this.state.overview}
						onChange={this.onOverviewChange}
					/>
					<QuillEditor passedBody={this.state.body} onUpdate={this.onUpdate} />
					<div>
						<input
							type="text"
							className="text-input text-input--author"
							placeholder="Enter Author name"
							value={this.state.author}
							onChange={this.onAuthorChange}
						/>
						<input
							type="email"
							className="text-input text-input--email"
							placeholder="Enter email address of Author"
							value={this.state.email}
							onChange={this.onEmailChange}
						/>
					</div>
					<div id="tags-input">
						<TagsInput
							value={this.state.tags}
							onChange={this.handleTagChange}
							onlyUnique={true}
							addOnPaste={true}
							className="react-tagsinput"
						/>
						<SingleDatePicker
							date={this.state.createdAt}
							onDateChange={this.onDateChange}
							focused={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
							isOutsideRange={() => false}
							displayFormat={'DD/MM/YYYY'}
							id="singleDatePicker"
						/>
					</div>
				</form>
				<div className="content-container">
					<div id="button-container--add">
						<button onClick={this.onSubmit} className="button__add">{this.props.post ? 'Save Post' : 'Add Post'}</button>
					</div>
					<div id="button-container--remove">
						<Link to="/" className="button__remove" onClick={this.props.post ? this.onRemove : null}> Remove Post</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startRemovePost: data => dispatch(startRemovePost(data)),
});

export default connect(undefined, mapDispatchToProps)(BlogPostForm);
