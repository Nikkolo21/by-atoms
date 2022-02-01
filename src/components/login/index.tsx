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
import { DISPLAY } from '../shared/wrapper/types';
import { default as isotipo } from '../../assets/isotipoV1.svg';

export const Login = () => {
	const navigate = useNavigate();
	return (
		<Wrapper display={DISPLAY.GRID} className="place-items-center h-full">
			<Wrapper
				display={DISPLAY.GRID}
				className="place-items-center rounded-[10px] py-[50px] max-w-[600px] bg-[#FFF8F3]">
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
						console.log(values);
						setSubmitting(false);
						navigate('/dashboard');
					}}>
					{({ values, isSubmitting, handleChange, handleBlur }) => (
						<Form className="w-full">
							<Wrapper className="justify-center h-[200px] mb-[20px]">
								<Link onClick={() => navigate('/')}>
									<img
										src={isotipo}
										className="w-full h-full"
									/>
								</Link>
							</Wrapper>
							<Wrapper
								display={DISPLAY.GRID}
								className="h-[80px] place-items-center">
								<Input
									className='w-[80%] h-[70%]'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									name="email"
									type="email"
									placeholder="Email"
								/>
							</Wrapper>
							<Wrapper
								display={DISPLAY.GRID}
								className="h-[80px] place-items-center">
								<Input
									className='w-[80%] h-[70%]'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									name="password"
									type="password"
									placeholder="Password"
								/>
							</Wrapper>
							<Wrapper
								display={DISPLAY.GRID}
								className="place-items-center mt-[10px]">
								<Button
									buttonType="submit"
									type={TYPES.PRIMARY}
									text="Login"
									className='text-sm w-[30%] h-[50px]'
									letterSpacing="2px"
								/>
							</Wrapper>
							<Wrapper
								display={DISPLAY.GRID}
								className="place-items-center py-[20px]">
								<Text fontSize="sm">
									Don't have an account?{' '}
									<Link
										type="primary"
										onClick={() => navigate('/register')}>
										Sign up
									</Link>
								</Text>
							</Wrapper>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</Wrapper>
	);
};
