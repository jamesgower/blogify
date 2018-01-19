import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import React from 'react';

export class QuillEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			body: props.passedBody ? props.passedBody : ''
		};
	}

	update = (value) => {
		this.setState(({ body: value}));
		this.props.onUpdate(value);
	};

	render() {
		return <ReactQuill value={this.state.body} onChange={this.update} className="editor"/>;
	}
}

export default QuillEditor;
