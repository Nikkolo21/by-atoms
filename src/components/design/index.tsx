/** @format */

import React from 'react';
import { TestIcon } from '../icon/TestIcon';
import { Button } from '../shared/button';
import { Header } from '../shared/header';
import { Link } from 'react-router-dom';
import { TYPES } from '../shared/types';
import { Wrapper } from '../shared/wrapper';
import { Input } from '../shared/input';
// import { default as logo } from '../../assets/test.svg';

export const Design = () => {
	return (
		<Wrapper flexDirection="col" gap="20px">
			<h1>Design System</h1>

			<hr />

			{/***** BUTTONS *****/}
			<Wrapper flexDirection="col" gap="20px">
				<h3>Buttons</h3>
				<Wrapper justifyContent="center" gap="20px">
					<Button
						type={TYPES.PRIMARY}
						text="Primary"
						onClick={() => console.log('Primary button clicked')}
					/>
					<Button
						type={TYPES.PRIMARY}
						icon={<TestIcon />}
						text="Primary with icon"
						onClick={() => console.log('Primary button clicked')}
					/>
					<Button
						type={TYPES.PRIMARY}
						text="Primary disabled"
						onClick={() => console.log('Primary button clicked')}
						disabled
					/>
				</Wrapper>
				<Wrapper justifyContent="center" gap="20px">
					<Button
						type={TYPES.SECONDARY}
						text="Secondary"
						onClick={() => console.log('Secondary button clicked')}
					/>
					<Button
						type={TYPES.SECONDARY}
						icon={<TestIcon />}
						text="Secondary with icon"
						onClick={() => console.log('Secondary button clicked')}
					/>
					<Button
						type={TYPES.SECONDARY}
						text="Secondary disabled"
						onClick={() => console.log('Secondary button clicked')}
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
						onClick={() => console.log('Tertiary button clicked')}
					/>
					<Button
						type={TYPES.TERTIARY}
						icon={<TestIcon />}
						text="Tertiary with icon"
						onClick={() => console.log('Tertiary button clicked')}
					/>
					<Button
						type={TYPES.TERTIARY}
						text="Tertiary disabled"
						onClick={() => console.log('Tertiary button clicked')}
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

			<hr />

			{/***** HEADER *****/}
			<Wrapper flexDirection="col" gap="20px">
				<h3>Header</h3>
				<Header>
					<Link to="/design">Text Link</Link>
					<Link to="/design">
						<Button type={TYPES.PRIMARY} text="Button Link" />
					</Link>
				</Header>
			</Wrapper>

			<hr />

			{/***** INPUT *****/}
			<Wrapper flexDirection="col" gap="20px">
				<h3>Inputs</h3>
				<Wrapper justifyContent="center" gap="20px">
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Button</label>
						<Input
							type="button"
							id="button"
							value="Click me!"
							width="min-content"
							height="min-content"
							onChange={() => console.log('Input button clicked')}
						/>
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Checkbox</label>
						<Input type="checkbox" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Color</label>
						<Input
							type="color"
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
						gap="5px">
						<label htmlFor="button">Date</label>
						<Input type="date" min="2022-01-01" max="2030-12-31" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Datetime-local</label>
						<Input
							type="datetime-local"
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
						gap="5px">
						<label htmlFor="button">Email</label>
						<Input type="email" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">File</label>
						<Input type="file" accept="image/png, image/jpeg" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Hidden</label>
						<Input type="hidden" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Month</label>
						<Input type="month" min="2018-03" value="2018-05" />
					</Wrapper>
				</Wrapper>
				<Wrapper justifyContent="center" gap="20px">
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Number</label>
						<Input type="number" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Password</label>
						<Input type="password" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Radio</label>
						<Input type="radio" />
						<Input type="radio" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Range</label>
						<Input type="range" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Reset</label>
						<Input type="reset" />
					</Wrapper>
				</Wrapper>
				<Wrapper justifyContent="center" gap="20px">
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Search</label>
						<Input type="search" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Submit</label>
						<Input type="submit" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Telephone</label>
						<Input type="tel" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Textl</label>
						<Input type="text" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Time</label>
						<Input type="time" />
					</Wrapper>
				</Wrapper>
				<Wrapper justifyContent="center" gap="20px">
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Url</label>
						<Input type="url" />
					</Wrapper>
					<Wrapper
						flexDirection="col"
						justifyContent="center"
						width="min-content"
						gap="5px">
						<label htmlFor="button">Week</label>
						<Input type="week" />
					</Wrapper>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	);
};
