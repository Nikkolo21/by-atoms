import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../shared/header';
import { Wrapper } from '../shared/wrapper';
import { Input } from '../shared/input';
import { FloatMenu } from '../shared/floatMenu';
import { default as logo } from '../../assets/logoV2.svg';
import { default as person } from '../../assets/person-icon.svg';

const menuElements = [
    {
        element: 'Profile',
        link: '/profile',
    },
    {
        element: 'Configuration',
        link: '/config',
    },
    {
        element: 'Logout',
        link: '/',
    },
]

export const AuthenticatedHeader = () => {
    return (
        <>
            <Header height='130px'>
                <Wrapper>
                    <Link to="/dashboard">
                        <Wrapper height="30px">
                            <img src={logo} />
                        </Wrapper>
                    </Link>
                </Wrapper>
                <Wrapper flex='2' display='grid' placeItems='center'>
                    <Input fontSize='md' width='100%' placeholder='Search project' />
                </Wrapper>
                <Wrapper display='grid' placeItems='end'>
                    <Wrapper justifyItems='end' justifyContent='end'>
                        <FloatMenu position='bottom-left' element={<Wrapper height='20px'><img src={person} /></Wrapper>}>
                            <div className='w-full h-full bg-white rounded-md border border-lightGrey p-2'>
                                {
                                    menuElements.map(elem => (
                                        <Link key={elem.element} to={elem.link}>
                                            <Wrapper className='hover:bg-lightGrey w-full h-full grid place-items-center' height='50px' display='grid' placeItems='center'>
                                                {elem.element}
                                            </Wrapper>
                                        </Link>
                                    ))
                                }
                            </div>
                        </FloatMenu>
                    </Wrapper>
                </Wrapper>
            </Header>
            <Outlet />
        </>
    )
}
