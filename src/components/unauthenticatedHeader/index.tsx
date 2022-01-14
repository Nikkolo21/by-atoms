/** @format */

import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { default as logo } from '../../assets/logoV1.svg';
import { DISPLAY } from '../shared/wrapper/types';

export const UnauthenticatedHeader = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header className="h-[130px]">
				<Wrapper>
					<Link to="/">
						<Wrapper className="h-[30px]">
							<img src={logo} />
						</Wrapper>
					</Link>
				</Wrapper>
				<Wrapper className="justify-end">
					<Button
						onClick={() => navigate('/login')}
						width="150px"
						letterSpacing="1px"
						fontSize="sm"
						type={TYPES.PRIMARY}
						text="Login"
					/>
				</Wrapper>
			</Header>
			<Wrapper
				display={DISPLAY.GRID}
				className="place-items-center p-[40px]">
				<Outlet />
			</Wrapper>
		</>
	);
};
