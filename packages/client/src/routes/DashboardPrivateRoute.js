import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Survey from '../pages/Survey';
import Navbar from '../components/Navbar';
import Events from '../pages/Events';

export const DashboardPrivateRoute = () => {
	const [eventos, setEventos] = useState([]);
	return (
		<>
			<Navbar setEventos={setEventos} />
			<div>
				<Switch>
					<Route exact path="/Survey" render={() => <Survey />} />
					<Route exact path="/events" render={() => <Events eventos={eventos} setEventos={setEventos} />} />
					<Redirect to="/events" />
				</Switch>
			</div>
		</>
	);
};
