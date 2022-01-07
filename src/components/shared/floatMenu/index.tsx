import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../wrapper';

export const FloatMenu: React.FC<{element: ReactElement}> = ({element}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    return (
        <div className='relative cursor-pointer h-6' onClick={openMenu} onMouseLeave={closeMenu}>
            {element}
            <div hidden={!menuIsOpen} className='absolute bottom-auto right-0 z-10 h-auto w-64 p-1'>
                <div className='w-full h-full bg-white rounded-md border border-opacityGrey p-2'>
                    <Link to="/profile">
                        <Wrapper className='hover:bg-opacityGrey w-full h-full grid place-items-center' height='50px' display='grid' placeItems='center'>
                            Profile
                        </Wrapper>
                    </Link>
                    <Link to="/config">
                        <Wrapper className='hover:bg-opacityGrey w-full h-full grid place-items-center' height='50px' display='grid' placeItems='center'>
                            Configuration
                        </Wrapper>
                    </Link>
                    <Link to="/">
                        <Wrapper className='hover:bg-opacityGrey w-full h-full grid place-items-center' height='50px' display='grid' placeItems='center'>
                            Logout
                        </Wrapper>
                    </Link>
                </div>
            </div>
        </div>
    )
}
