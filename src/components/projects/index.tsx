/** @format */

import React, { useState } from 'react';
import { Button } from '../shared/button';
import { Modal } from '../shared/modal';
import { Wrapper } from '../shared/wrapper';
import { ProjectCard } from './projectCard';
import { Project } from './types';

const mockProjects: Project[] = [
	{
		title: 'Project 1',
		description:
			'This is a description where I can describe what my project does and when to implement every project or piece of this project in particular.',
		id: '1',
	},
	{
		title: 'Project 2',
		description:
			'This is a description where I can describe what my project does and when to implement every project or piece of this project in particular.',
		id: '2',
	},
	{
		title: 'Project 3',
		description:
			'This is a description where I can describe what my project does and when to implement every project or piece of this project in particular.',
		id: '3',
	},
];

export const Projects = () => {
	const [openModal, setOpenModal] = useState(false);

	const openOrCloseModal = () => setOpenModal(!openModal);

	return (
		<Wrapper className="flex-col">
			<Wrapper className="flex-1 justify-end mb-[20px] max-w-[1280px]">
				<Button
					className="w-[160px] text-sm"
					size="sm"
					letterSpacing="1px"
					text="Create project"
					onClick={openOrCloseModal}
				/>
			</Wrapper>

			<Modal
				open={openModal}
				closeModal={openOrCloseModal}
				content={
					<div>
						<p>Modal content</p>
						<p>Modal content</p>
						<p>Modal content</p>
					</div>
				}>
			</Modal>
			{mockProjects.map(project => <ProjectCard key={project.id} project={project} />)}
		</Wrapper>
	);
};
