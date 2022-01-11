import React from 'react';
import { useParams } from 'react-router';

export const Project = () => {
    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
    )
}
