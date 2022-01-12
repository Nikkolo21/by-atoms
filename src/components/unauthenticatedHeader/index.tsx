import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { default as logo } from '../../assets/logoV1.svg';

export const UnauthenticatedHeader = () => {
	const navigate = useNavigate();
    return (
		<>
			<Header height='130px'>
				<Wrapper>
					<Link to="/">
						<Wrapper height="30px">
							<img src={logo} />
						</Wrapper>
					</Link>
				</Wrapper>
				<Wrapper display="flex" justifyContent="end">
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
			<Wrapper padding='40px' display='grid' placeItems='center'>
            	<Outlet />
			</Wrapper>
		</>
    )
}
