import ReactQuill from 'react-quill';
import React from 'react';
import '../styles/vs2015.css';

export class ReadQuillEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			body: props.passedBody ? props.passedBody : '',
			modules: { syntax: true, toolbar: false},
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
				className="editor"
				modules={this.state.modules}
				readOnly={true}
				className="readOnlyEditor"
			/>
			
		);
	}
}

export default ReadQuillEditor;
