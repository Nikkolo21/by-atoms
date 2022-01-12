import React from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from '../../shared/wrapper';
import { Text } from '../../shared/text';
import { ProjectCardProps } from '../types';
import { default as pencil } from '../../../assets/pencil-white.svg';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const navigate = useNavigate();
    return (
        <Wrapper key={project.id} className='relative' flexDirection='col' height='180px' borderRadius='10px' margin='0 0 20px 0' padding='40px' boxShadow='rgb(37 42 49 / 6%) 0px 4px 6px -2px, rgb(37 42 49 / 10%) 0px 10px 15px -3px, rgb(37 42 49 / 10%) 0px -1px 6px -2px'>
            <a className='cursor-pointer absolute z-10 top-6 right-4 opacity-80'>
                <img src={pencil} width={20} />
            </a>
            <a onClick={() => navigate(`/project/${project.id}`)} className='flex-col cursor-pointer'>
                <Wrapper margin='0 0 10px 0'>
                    <Text fontWeight='semibold' letterSpacing='.5px' fontSize='xl'>{project.title}</Text>
                </Wrapper>
                <Wrapper>
                    {project.description}
                </Wrapper>
            </a>
        </Wrapper>
    )
}
