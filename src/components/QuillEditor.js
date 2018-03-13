import ReactQuill from 'react-quill';
import React from 'react';
import '../styles/vs2015.css';
import hljs from 'highlight.js';

export class QuillEditor extends React.Component {
	constructor(props) {
		super(props);

		hljs.configure({
			tabReplace: '    ',
		});
		hljs.initHighlighting();
		
		this.state = {
			body: props.passedBody ? props.passedBody : '',
			modules: {
				syntax: true,
				toolbar: [
					[{ header: [1, 2, 3, 4, 5, false] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					['link', 'image'],
					[{ align: '' }],
					[{ align: 'center' }],
					[{ align: 'justify' }],
					[{ align: 'right' }],
					['code-block'],					
				],
				clipboard: {
					matchVisual: false
				}
			},
			theme: 'snow',
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
				id="editor"
				modules={this.state.modules}
				theme={this.state.theme}
			/>
		);
	}
}

export default QuillEditor;
