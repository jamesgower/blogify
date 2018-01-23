import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import React from 'react';

export class QuillEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			body: props.passedBody ? props.passedBody : '',
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					['link', 'image'],
					['clean'],
				],
			},

			formats: [
				'header',
				'bold',
				'italic',
				'underline',
				'strike',
				'blockquote',
				'list',
				'bullet',
				'indent',
				'link',
				'image',
			],
		};
	}

	update = value => {
		this.setState({ body: value });
		this.props.onUpdate(value);
	};

	render() {
		return (
			<ReactQuill
				value={this.state.body}
				onChange={this.update}
				className="editor"
				modules={this.state.modules}
				formats={this.state.formats}
			/>
		);
	}
}

export default QuillEditor;
