import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../shared/button';
import { Wrapper } from '../shared/wrapper';
import { ProjectCard } from './projectCard';
import { Project } from './types';

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
        id: '1',
    },
    {
        title: 'Project 2',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
        id: '2',
    },
    {
        title: 'Project 3',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
        id: '3',
    },
];

export const Projects = () => {
	const navigate = useNavigate();
    return (
        <>
            <Wrapper justifyContent='end' width='100%' maxWidth='1280px'>
                <Button width='160px' size='sm' fontSize='sm' letterSpacing='1px' text='Create project' />
            </Wrapper>
            <Wrapper flexDirection='row' width='100%' maxWidth='1280px'>
                <Wrapper maxHeight='70vh' flexDirection='col' flex='1' margin='20px 0 0 0' padding='40px' backgroundColor='rgba(10,10,10,0.03)' borderRadius='10px'>
                    Menu
                </Wrapper>
                <Wrapper flex='3' flexDirection='col' margin='20px 0 0 20px'>
                    { projects.map(project => <ProjectCard project={project} />) }
                </Wrapper>
            </Wrapper>
        </>
    )
}
