import React from 'react';
import { connect } from 'react-redux';
import { selectPosts } from '../selectors/posts';
import { startGetAllPosts, startSetPosts } from '../actions/posts';
import { Button, ButtonGroup } from 'reactstrap';

export class BlogPostSummary extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 1,
		};
	}

	onRadioButtonClick(selected) {
		this.setState({ selected });
		selected === 1 ? this.props.startSetPosts() : this.props.startGetAllPosts();
	}

	render() {
		const postWord = this.props.postCount === 1 ? 'post' : 'posts';
		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">
						Viewing <span>{this.props.postCount}</span> {postWord} {this.state.selected === 2 && ' from all users.'}
					</h1>
					<div className="page-header__actions">
						<Button color="primary" style={{padding: '5px 20px', fontSize: '16px'}} className="button" onClick={() => (location.href = '/create')} size="lg">
							Add Post
						</Button>
						<br />
						<ButtonGroup style={{ margin: '20px 0' }}>
							<Button
								color="info"
								onClick={() => this.onRadioButtonClick(1)}
								active={this.state.selected === 1}
								size="lg"
							>
								Show My Posts
							</Button>
							<Button
								color="info"
								onClick={() => this.onRadioButtonClick(2)}
								active={this.state.selected === 2}
								size="lg"
							>
								Show All Posts
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const myVisiblePosts = selectPosts(state.posts, state.filters);
	return {
		postCount: myVisiblePosts.length,
		auth: state.auth,
	};
};

const mapDispatchToProps = dispatch => ({
	startGetAllPosts: () => dispatch(startGetAllPosts()),
	startSetPosts: () => dispatch(startSetPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostSummary);
