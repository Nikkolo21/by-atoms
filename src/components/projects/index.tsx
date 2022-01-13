/** @format */

import React from 'react';
import { Button } from '../shared/button';
import { Wrapper } from '../shared/wrapper';
import { ProjectCard } from './projectCard';
import { Project } from './types';

const projects: Project[] = [
	{
		title: 'Project 1',
		description:
			'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
		id: '1',
	},
	{
		title: 'Project 2',
		description:
			'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
		id: '2',
	},
	{
		title: 'Project 3',
		description:
			'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
		id: '3',
	},
];

export const Projects = () => {
	return (
		<>
			<Wrapper className="flex-1 justify-end max-w-[1280px]">
				<Button
					className="w-[160px]"
					fontSize="sm"
					size="sm"
					letterSpacing="1px"
					text="Create project"
				/>
			</Wrapper>
			<Wrapper className="flex-1 max-w-[1280px]">
				<Wrapper className="flex-col flex-1 mt-[20px] p-[40px] max-h-[70vh] bg-[rgba(10,10,10,0.03)] rounded-[10px]">
					Menu
				</Wrapper>
				<Wrapper className="flex-col flex-3 mt-[20px] mb-[20px]">
					{projects.map((project) => (
						<ProjectCard project={project} />
					))}
				</Wrapper>
			</Wrapper>
		</>
	);
};
