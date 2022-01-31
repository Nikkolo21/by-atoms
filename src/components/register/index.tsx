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

export const Register = () => {
	const navigate = useNavigate();
	return (
		<Wrapper display={DISPLAY.GRID} className="place-items-center h-full">
			<Wrapper
				display={DISPLAY.GRID}
				className="place-items-center rounded-[10px] py-[100px] max-w-[600px] bg-[#FFF8F3]">
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
					}}>
					{({ values, isSubmitting, handleChange, handleBlur }) => (
						<Form className="w-full">
							<Wrapper
								display={DISPLAY.GRID}
								className="place-items-center h-[80px]">
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
								className="place-items-center h-[80px]">
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
								className="place-items-center py-[30px]">
								<Text fontSize="sm">
									Already have an account?{' '}
									<Link
										type="primary"
										onClick={() => navigate('/login')}>
										Login
									</Link>
								</Text>
							</Wrapper>
							<Wrapper
								display={DISPLAY.GRID}
								className="place-items-center">
								<Button
									buttonType="submit"
									type={TYPES.PRIMARY}
									text="Register"
									className='text-sm w-[30%] h-[50px]'
									letterSpacing="2px"
									onClick={() => console.log('register')}
								/>
							</Wrapper>
						</Form>
					)}
				</Formik>
			</Wrapper>
		</Wrapper>
	);
};
