import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../shared/header';
import { Wrapper } from '../shared/wrapper';
import { Input } from '../shared/input';
import { default as logo } from '../../assets/logoV2.svg';
import { default as person } from '../../assets/person-icon.svg';
import { FloatMenu } from '../shared/floatMenu';

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
                        <FloatMenu element={<Wrapper height='20px'><img src={person} /></Wrapper>} />
                    </Wrapper>
                </Wrapper>
            </Header>
            <Outlet />
        </>
    )
}
