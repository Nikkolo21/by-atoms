/** @format */

import React, { useState } from 'react';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';

export const Login = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<Wrapper display="grid" placeItems="center" height="80vh">
			<Wrapper
				padding="100px 0"
				width="100%"
				maxWidth="600px"
				backgroundColor="rgba(10, 10, 10, 0.1)"
				display="grid"
				placeItems="center"
			>
				<Wrapper
					height="100px"
					padding="10px 0 5px 0"
					display="grid"
					placeItems="center"
				>
					<Input
						noBorder
						type="email"
						width="70%"
						height="70%"
						placeholder="Email"
						onChange={() => console.log(3)}
					/>
				</Wrapper>
				<Wrapper
					height="100px"
					padding="5px 0 10px"
					display="grid"
					placeItems="center"
				>
					<Input
						noBorder
						type="password"
						width="70%"
						height="70%"
						placeholder="Password"
						onChange={() => console.log(3)}
					/>
				</Wrapper>
				<Wrapper
					padding="20px 0 0 0"
					display="grid"
					placeItems="center"
				>
					<Modal
						open={openModal}
						closeModal={() => setOpenModal(false)}
						content={
							<div style={{ height: '400px' }}>modal content</div>
						}
					>
						<Button
							type={TYPES.PRIMARY}
							text="Login"
							size="xl"
							width="40%"
							onClick={() => setOpenModal(true)}
						/>
					</Modal>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	);
};
