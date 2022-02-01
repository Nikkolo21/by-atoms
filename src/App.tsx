/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import { Login } from './components/login';
import { Design } from './components/design/index';
import { Register } from './components/register';
import { Home } from './components/home';
import { Projects } from './components/projects';
import { AuthenticatedHeader } from './components/authenticatedHeader';
import { UnauthenticatedHeader } from './components/unauthenticatedHeader';
import { Profile } from './components/profile';
import { Project } from './components/project';
import { Configuration } from './components/configuration';
import './index.css';
import './styles/output.css';

function App() {
	return (
		<Provider store={store}>
			<div className="h-screen">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route element={<UnauthenticatedHeader />}>
						<Route path="/" element={<Home />}></Route>
					</Route>
					<Route element={<AuthenticatedHeader />}>
						<Route path="/design" element={<Design />} />
						<Route path="/dashboard" element={<Projects />} />
						<Route path="/project/:id" element={<Project />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/config" element={<Configuration />} />
					</Route>
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
