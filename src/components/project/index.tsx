import React from 'react';
import { useParams } from 'react-router';
import { Wrapper } from '../shared/wrapper';

export const Project = () => {
    const { id } = useParams();
    return (
        <Wrapper>
            {id}
        </Wrapper>
    )
}
