import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardPrivateRoute } from './DashboardPrivateRoute';
import { DataContext } from '../store/GlobalState';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import PageAdmin from '../pages/PageAdmin';
import { ACTIONS } from '../store/Actions';

export default function SourceRouter() {
	const { state, dispatch } = useContext(DataContext);
	const { logged } = state;
	useEffect(() => {
		if (localStorage.getItem('token')) {
			const user = JSON.parse(localStorage.getItem('user'));
			dispatch({
				type: ACTIONS.AUTH,
				payload: user,
			});
			dispatch({
				type: ACTIONS.AUTH_LOGING,
			});
		} else {
			dispatch({
				type: ACTIONS.AUTH_LOGOUT,
			});
		}
	}, [localStorage.getItem('token')]);
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute exact path="/login" component={PageOne} isAuthenticated={logged} />
					<PublicRoute exact path="/register" component={PageTwo} isAuthenticated={logged} />
					<PublicRoute exact path="/admin" component={PageAdmin} isAuthenticated={logged} />
					<PrivateRoute isAuthenticated={logged} path="/" component={DashboardPrivateRoute} />
				</Switch>
			</div>
		</Router>
	);
}
