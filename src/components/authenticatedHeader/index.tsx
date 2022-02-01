/** @format */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../shared/header';
import { Wrapper } from '../shared/wrapper';
import { Input } from '../shared/input';
import { FloatMenu } from '../shared/floatMenu';
import { default as logo } from '../../assets/logoV2.svg';
import { default as person } from '../../assets/person-icon.svg';
import { DISPLAY } from '../shared/wrapper/types';

const menuElements = [
	{
		element: 'Profile',
		link: '/profile',
	},
	{
		element: 'Configuration',
		link: '/config',
	},
	{
		element: 'Logout',
		link: '/',
	},
];

export const AuthenticatedHeader = () => {
	return (
		<>
			<Header className="h-[130px]">
				<Wrapper className="flex-1">
					<Link to="/dashboard">
						<Wrapper className="h-[30px]">
							<img src={logo} />
						</Wrapper>
					</Link>
				</Wrapper>
				<Wrapper
					display={DISPLAY.GRID}
					className="place-items-center flex-2">
					<Input
						className='w-[100%]'
						fontSize="normal"
						placeholder="Search project"
					/>
				</Wrapper>
				<Wrapper
					display={DISPLAY.GRID}
					className="place-items-end flex-1">
					<Wrapper className="justify-end">
						<FloatMenu
							position="bottom-left"
							element={
								<Wrapper className="h-[20px]">
									<img src={person} />
								</Wrapper>
							}>
							<Wrapper
								display={DISPLAY.BLOCK}
								className="h-full bg-white rounded-md border border-lightGrey p-2">
								{menuElements.map((elem) => (
									<Link key={elem.element} to={elem.link}>
										<Wrapper
											display={DISPLAY.GRID}
											className="place-items-center h-[50px] hover:bg-lightGrey">
											{elem.element}
										</Wrapper>
									</Link>
								))}
							</Wrapper>
						</FloatMenu>
					</Wrapper>
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
