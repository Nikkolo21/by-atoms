/** @format */

import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { default as logo } from '../../assets/logotipoV7.svg';

export const Home = () => {
	const navigate = useNavigate();
	return (
		<Header>
			<Wrapper>
				<Link to="/">
					<Wrapper height="40px">
						<img src={logo} />
					</Wrapper>
				</Link>
			</Wrapper>
			<Wrapper display="flex" justifyContent="end">
				<Button
					onClick={() => navigate('/login')}
					width="150px"
					letterSpacing="1px"
					fontSize="xs"
					type={TYPES.PRIMARY}
					text="Login"
				/>
			</Wrapper>
		</Header>
	);
};
