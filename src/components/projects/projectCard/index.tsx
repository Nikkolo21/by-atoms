/** @format */

import React from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from '../../shared/wrapper';
import { ProjectCardProps } from '../types';
import { default as pencil } from '../../../assets/pencil-white.svg';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const navigate = useNavigate();
	return (
		<Wrapper
			className="relative flex-col rounded-[10px] mb-[10px] p-[40px] shadow">
			<a className="cursor-pointer absolute z-10 top-6 right-4 opacity-80">
				<img src={pencil} className="w-[20px]" />
			</a>
			<a
				onClick={() => navigate(`/project/${project.id}`)}
				className="flex-col cursor-pointer">
				<Wrapper className="text-lg font-semibold tracking-wide mb-[10px]">
					{project.title}
				</Wrapper>
				<Wrapper className="text-ellipsis text-greyText overflow-hidden h-auto max-h-[70px]">
					{project.description}
				</Wrapper>
			</a>
		</Wrapper>
	);
};
