import React, { useState } from 'react';
import { Atoms } from '../atoms';
import { Projects } from '../projects';
import { Wrapper } from '../shared/wrapper';
import { SELECTED_ELEMENT } from './types';

export const Dashboard = () => {
    const [selected, setSelected] = useState<SELECTED_ELEMENT>(SELECTED_ELEMENT.PROJECT);
    const projectIsSelected = selected === SELECTED_ELEMENT.PROJECT;
    const selectedClass = 'text-primary font-semibold border-b-2 border-primary';

    const selectElement = () => setSelected(projectIsSelected ? SELECTED_ELEMENT.ATOM : SELECTED_ELEMENT.PROJECT);

    return (
        <Wrapper className="flex-1 max-w-[1280px]">
            <Wrapper className="flex-col flex-1 mt-[20px] p-[40px] max-h-[70vh] bg-[rgba(10,10,10,0.03)] rounded-[10px]">
                Menu
            </Wrapper>
            <Wrapper className='flex-col flex-3 mt-[20px] ml-[20px] mb-[20px]'>
                <Wrapper className='flex-row mb-[10px] place-content-center'>
                    <div onClick={() => !projectIsSelected && selectElement()} className={`${projectIsSelected ? selectedClass : 'cursor-pointer'} mr-[20px]`}>
                        Projects
                    </div>
                    <div onClick={() => projectIsSelected && selectElement()} className={`${!projectIsSelected ? selectedClass : 'cursor-pointer'}`}>
                        Atoms
                    </div>
                </Wrapper>
                { projectIsSelected ? <Projects/> : <Atoms/> }
            </Wrapper>
        </Wrapper>
    )
}
