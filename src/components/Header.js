import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<div className="content-container">
					<div className="header__content">
						<Link className="header__title" to="/dashboard">
							<h1>Blogify</h1>
						</Link>
						{this.props.auth.uid ? (
							<button className="button button__link" onClick={this.props.startLogout}>
								Logout
							</button>
						) : (
							<Link className="button button__link" to="/">
								Login
							</Link>
						)}
					</div>
				</div>
			</header>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth: state.auth,
	};
};

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
