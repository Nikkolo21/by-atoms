/** @format */

import React from 'react';
import { useNavigate } from 'react-router';
import { Formik, Form } from 'formik';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { Link } from '../shared/link';
import { Text } from '../shared/text';
import { default as isotipo } from '../../assets/isotipoV1.svg';

export const Login = () => {
	const navigate = useNavigate();
	return (
		<Wrapper display="grid" placeItems="center" height="100%">
			<Wrapper
				borderRadius="10px"
				padding="50px 0"
				width="100%"
				maxWidth="600px"
				backgroundColor="#FFF8F3"
				display="grid"
				placeItems="center"
			>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
						const errors: { email?: string; password?: string } =
							{};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
								values.email
							)
						) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							console.log({ values });
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ values, isSubmitting, handleChange, handleBlur }) => (
						<Form style={{ width: '100%' }}>
							<Wrapper
								height="200px"
								display="flex"
								justifyContent="center"
								margin="0 0 20px 0"
							>
								<Link onClick={() => navigate('/')}>
									<img
										src={isotipo}
										style={{
											height: '-webkit-fill-available',
										}}
									/>
								</Link>
							</Wrapper>
							<Wrapper
								height="80px"
								display="grid"
								placeItems="center"
							>
								<Input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									name="email"
									type="email"
									width="80%"
									height="70%"
									placeholder="Email"
								/>
							</Wrapper>
							<Wrapper
								height="80px"
								display="grid"
								placeItems="center"
							>
								<Input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									name="password"
									type="password"
									width="80%"
									height="70%"
									placeholder="Password"
								/>
							</Wrapper>
							<Wrapper
								display="grid"
								placeItems="center"
								padding="30px 0"
							>
								<Text fontSize="sm">
									Don't have an account?{' '}
									<Link
										type="primary"
										onClick={() => navigate('/register')}
									>
										Sign up
									</Link>
								</Text>
							</Wrapper>
							<Wrapper display="grid" placeItems="center">
								<Button
									buttonType="submit"
									type={TYPES.PRIMARY}
									text="Login"
									width="30%"
									height="50px"
									letterSpacing="2px"
									onClick={() => console.log('login')}
								/>
							</Wrapper>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</Wrapper>
	);
};
