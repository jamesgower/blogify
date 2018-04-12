import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Button } from 'reactstrap';

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
							<Button color="primary" size="lg" onClick={this.props.startLogout}>
								Logout
							</Button>
						) : (
							<Button color="danger" size="lg" onClick={() => (location.href = '/')}>
								Login
							</Button>
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
