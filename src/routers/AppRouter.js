import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BlogDashboardPage from '../components/BlogDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import ReadPost from '../components/ReadPost';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<Route path="/dashboard" component={BlogDashboardPage} />
				<PrivateRoute path="/create" component={AddPostPage} />
				<PrivateRoute path="/edit/:id" component={EditPostPage} />
				<PublicRoute path="/read/:id" component={ReadPost} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
