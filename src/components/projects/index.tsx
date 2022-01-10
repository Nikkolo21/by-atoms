import React from 'react';
import { Button } from '../shared/button';
import { Text } from '../shared/text';
import { Wrapper } from '../shared/wrapper';
import { default as pencil } from '../../assets/pencil-white.svg';

const projects = [
    {
        title: 'Project 1',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
    },
    {
        title: 'Project 2',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
    },
    {
        title: 'Project 3',
        description: 'This is a description where I can describe what my project does and when to implement every atom or piece of this project in particular.',
    },
];

export const Projects = () => {
    return (
        <Wrapper padding='40px' display='grid' placeItems='center'>
            <Wrapper justifyContent='end' width='100%' maxWidth='1280px'>
                <Button width='160px' size='sm' fontSize='sm' letterSpacing='1px' text='Create project' />
            </Wrapper>
            <Wrapper flexDirection='row' width='100%' maxWidth='1280px'>
                <Wrapper maxHeight='70vh' flexDirection='col' flex='1' margin='20px 0 0 0' padding='40px' backgroundColor='rgba(10,10,10,0.05)' borderRadius='10px'>
                    Menu
                </Wrapper>
                <Wrapper flex='3' flexDirection='col' margin='20px 0 0 20px'>
                    {
                        projects.map(project => (
                            <Wrapper className='relative' key={project.title} flexDirection='col' height='180px' borderRadius='10px' margin='0 0 20px 0' padding='40px' boxShadow='rgb(37 42 49 / 6%) 0px 4px 6px -2px, rgb(37 42 49 / 10%) 0px 10px 15px -3px, rgb(37 42 49 / 10%) 0px -1px 6px -2px'>
                                <a className='cursor-pointer absolute z-10 top-6 right-4 opacity-80'>
                                    <img src={pencil} width={20} />
                                </a>
                                <Wrapper margin='0 0 10px 0'>
                                    <Text fontWeight='semibold' letterSpacing='.5px' fontSize='xl'>{project.title}</Text>
                                </Wrapper>
                                <Wrapper>
                                    {project.description}
                                </Wrapper>
                            </Wrapper>
                        ))
                    }
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}
