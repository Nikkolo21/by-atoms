/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import { Login } from './components/login';
import { Design } from './components/design/index';
import { Register } from './components/register';
import { Home } from './components/home';
import './index.css';
import './styles/output.css';

function App() {
	return (
		<Provider store={store}>
			<div className="h-screen">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Home />}></Route>
					<Route path="/design" element={<Design />} />
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
