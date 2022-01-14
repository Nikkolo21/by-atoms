/** @format */

import React from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from '../../shared/wrapper';
import { Text } from '../../shared/text';
import { ProjectCardProps } from '../types';
import { default as pencil } from '../../../assets/pencil-white.svg';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const navigate = useNavigate();
	return (
		<Wrapper
			key={project.id}
			className="relative flex-col h-[180px] rounded-[10px] ml-[20px] p-[40px] shadow">
			<a className="cursor-pointer absolute z-10 top-6 right-4 opacity-80">
				<img src={pencil} className="w-[20px]" />
			</a>
			<a
				onClick={() => navigate(`/project/${project.id}`)}
				className="flex-col cursor-pointer">
				<Wrapper className="mb-[10px]">
					<Text
						fontWeight="semibold"
						letterSpacing=".5px"
						fontSize="xl">
						{project.title}
					</Text>
				</Wrapper>
				<Wrapper>{project.description}</Wrapper>
			</a>
		</Wrapper>
	);
};
