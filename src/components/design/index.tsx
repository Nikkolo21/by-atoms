/** @format */

import React, { useState } from 'react';
import { TestIcon } from '../icon/TestIcon';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { Link } from 'react-router-dom';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { Input } from '../shared/input';
import { Modal } from '../shared/modal';
import { Accordion } from '../accordion';

export const Design = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Wrapper flexDirection="col" gap="20px">
			<h1>Design System</h1>

			<hr />

			{/***** BUTTONS *****/}
			<Accordion text="Buttons">
				<Wrapper flexDirection="col" gap="20px">
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.PRIMARY}
							text="Primary"
							onClick={() =>
								console.log('Primary button clicked')
							}
						/>
						<Button
							type={TYPES.PRIMARY}
							icon={<TestIcon />}
							text="Primary with icon"
							onClick={() =>
								console.log('Primary button clicked')
							}
						/>
						<Button
							type={TYPES.PRIMARY}
							text="Primary disabled"
							onClick={() =>
								console.log('Primary button clicked')
							}
							disabled
						/>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.SECONDARY}
							text="Secondary"
							onClick={() =>
								console.log('Secondary button clicked')
							}
						/>
						<Button
							type={TYPES.SECONDARY}
							icon={<TestIcon />}
							text="Secondary with icon"
							onClick={() =>
								console.log('Secondary button clicked')
							}
						/>
						<Button
							type={TYPES.SECONDARY}
							text="Secondary disabled"
							onClick={() =>
								console.log('Secondary button clicked')
							}
							disabled
						/>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.WHITE}
							text="White"
							onClick={() => console.log('White button clicked')}
						/>
						<Button
							type={TYPES.WHITE}
							icon={<TestIcon />}
							text="White with icon"
							onClick={() => console.log('White button clicked')}
						/>
						<Button
							type={TYPES.WHITE}
							text="White disabled"
							onClick={() => console.log('White button clicked')}
							disabled
						/>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.TERTIARY}
							text="Tertiary"
							onClick={() =>
								console.log('Tertiary button clicked')
							}
						/>
						<Button
							type={TYPES.TERTIARY}
							icon={<TestIcon />}
							text="Tertiary with icon"
							onClick={() =>
								console.log('Tertiary button clicked')
							}
						/>
						<Button
							type={TYPES.TERTIARY}
							text="Tertiary disabled"
							onClick={() =>
								console.log('Tertiary button clicked')
							}
							disabled
						/>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.ERROR}
							text="Error"
							onClick={() => console.log('Error button clicked')}
						/>
						<Button
							type={TYPES.ERROR}
							icon={<TestIcon />}
							text="Error with icon"
							onClick={() => console.log('Error button clicked')}
						/>
						<Button
							type={TYPES.ERROR}
							text="Error disabled"
							onClick={() => console.log('Error button clicked')}
							disabled
						/>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Button
							type={TYPES.BONE}
							text="Bone"
							onClick={() => console.log('Bone button clicked')}
						/>
						<Button
							type={TYPES.BONE}
							icon={<TestIcon />}
							text="Bone with icon"
							onClick={() => console.log('Bone button clicked')}
						/>
						<Button
							type={TYPES.BONE}
							text="Bone disabled"
							onClick={() => console.log('Bone button clicked')}
							disabled
						/>
					</Wrapper>
				</Wrapper>
			</Accordion>

			<hr />

			{/***** HEADER *****/}
			<Accordion text="Header">
				<Wrapper flexDirection="col" gap="20px">
					<Header>
						<Link to="/design">Text Link</Link>
						<Link to="/design">
							<Button type={TYPES.PRIMARY} text="Button Link" />
						</Link>
					</Header>
				</Wrapper>
			</Accordion>

			<hr />

			{/***** INPUT *****/}
			<Accordion text="Input">
				<Wrapper flexDirection="col" gap="20px">
					<Wrapper justifyContent="center" gap="20px">
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="button">Button</label>
							<Input
								type="button"
								id="button"
								value="Click me!"
								width="min-content"
								height="min-content"
								onChange={() =>
									console.log('Input button clicked')
								}
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="checkbox">Checkbox</label>
							<Input type="checkbox" id="checkbox" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="color">Color</label>
							<Input
								type="color"
								id="color"
								value="#f6b73c"
								width="60px"
								height="30px"
								padding="6px"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="date">Date</label>
							<Input
								type="date"
								id="date"
								min="2022-01-01"
								max="2030-12-31"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="datetime-local">
								Datetime-local
							</label>
							<Input
								type="datetime-local"
								id="datetime-local"
								// value="2022-07-22T19:30"
								min="2022-01-01"
								max="2030-12-31"
							/>
						</Wrapper>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="email">Email</label>
							<Input
								type="email"
								id="email"
								placeholder="test@mail.com"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="file">File</label>
							<Input
								type="file"
								id="file"
								accept="image/png, image/jpeg"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="month">Month</label>
							<Input
								type="month"
								id="month"
								min="2018-03"
								placeholder="2018-05"
							/>
						</Wrapper>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="number">Number</label>
							<Input
								type="number"
								id="number"
								min="10"
								max="100"
								placeholder="15"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="password">Password</label>
							<Input
								type="password"
								id="password"
								placeholder="******"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="radioInput">Radio</label>
							<Input type="radio" name="radio" value="Option1" />
							<Input type="radio" name="radio" value="Option2" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="range">Range</label>
							<Input type="range" id="range" min="0" max="10" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="reset">Reset</label>
							<Input type="reset" id="reset" value="Reset" />
						</Wrapper>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="search">Search</label>
							<Input type="search" id="search" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="submit">Submit</label>
							<Input type="submit" id="submit" value="Submit" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="tel">Telephone</label>
							<Input
								type="tel"
								id="tel"
								placeholder="987654321"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="text">Text</label>
							<Input type="text" id="text" />
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="time">Time</label>
							<Input
								type="time"
								id="time"
								min="09:00"
								max="18:00"
							/>
						</Wrapper>
					</Wrapper>
					<Wrapper justifyContent="center" gap="20px">
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="url">Url</label>
							<Input
								type="url"
								id="url"
								placeholder="https://example.com"
							/>
						</Wrapper>
						<Wrapper
							flexDirection="col"
							justifyContent="center"
							width="min-content"
							gap="5px"
						>
							<label htmlFor="week">Week</label>
							<Input
								type="week"
								id="week"
								min="2018-W18"
								max="2018-W26"
								placeholder="2018-W22"
							/>
						</Wrapper>
					</Wrapper>
				</Wrapper>
			</Accordion>

			<hr />

			{/***** MODAL *****/}
			<Accordion text="Modal">
				<Wrapper flexDirection="col" gap="20px">
					<Wrapper justifyContent="center" gap="20px">
						<Modal
							open={openModal}
							closeModal={() => setOpenModal(false)}
							content={
								<div style={{ height: '400px' }}>
									Modal content
								</div>
							}
						>
							<Button
								type={TYPES.PRIMARY}
								text="Open Modal"
								width="25%"
								onClick={() => setOpenModal(true)}
							/>
						</Modal>
					</Wrapper>
				</Wrapper>
			</Accordion>
		</Wrapper>
	);
};
