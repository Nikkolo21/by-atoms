/** @format */

import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { DISPLAY } from '../shared/wrapper/types';
import { default as logo } from '../../assets/logoV1.svg';

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
						className='text-sm w-[150px]'
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
