import React from 'react';
import moment from 'moment';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
import { SingleDatePicker } from 'react-dates';
import QuillEditor from './QuillEditor';

export default class BlogPostForm extends React.Component {
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
			calendarFocused: false,
			error: '',
		};
	}

	onUpdate = (val) => {
		this.setState({
			body: val
		});
	}

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
				<div>
					<div id="tags-input">
						<TagsInput
							value={this.state.tags}
							onChange={this.handleTagChange}
							onlyUnique={true}
							addOnPaste={true}
							className="react-tagsinput"
						/>
					</div>
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
				<div>
					<button className="button">{this.props.post ? 'Save Post' : 'Add Post'}</button>
				</div>
			</form>
		);
	}
}
