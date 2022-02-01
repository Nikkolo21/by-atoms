/** @format */

import React from 'react';
import { Wrapper } from '../wrapper';
import { DISPLAY } from '../wrapper/types';
import { AtomCardProps } from './types';

export const AtomCard: React.FC<AtomCardProps> = ({
	children,
	description,
	preview,
	text,
}) => {
	return (
		<>
			<Wrapper className="bg-white flex-row rounded-[25px] h-[180px] shadow overflow-hidden md:max-w-[450px] md:min-h-[450px] md:flex-col">
				<Wrapper
					display={DISPLAY.BLOCK}
					className="flex-1 h-full separator md:h-[60%]">
					<img src={preview} className="object-cover w-full h-full" />
				</Wrapper>
				<Wrapper className="flex-3 bg-white flex-col justify-evenly items-center p-[18px] gap-[10px] md:h-[40%]">
					<p className="text-lg font-bold">{text}</p>
					<p className="line-clamp-2" title={description}>
						{description}
					</p>
					{children}
				</Wrapper>
			</Wrapper>
		</>
	);
};
