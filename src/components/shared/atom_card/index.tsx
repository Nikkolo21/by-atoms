/** @format */

import React from 'react';
import { AtomCardProps } from './types';

export const AtomCard: React.FC<AtomCardProps> = ({
	children,
	description,
	preview,
	text,
}) => {
	return (
		<>
			<div className="bg-white flex flex-row rounded-[25px] w-full h-[180px] shadow overflow-hidden md:max-w-[450px] md:min-h-[450px] md:flex-col">
				<div className="w-[35%] h-full separator md:w-full md:h-[60%]">
					<img src={preview} className="object-cover w-full h-full" />
				</div>
				<div className="bg-white flex flex-col justify-evenly items-center w-full p-[18px] gap-[10px] md:h-[40%]">
					<p className="text-lg font-bold">{text}</p>
					<p className="line-clamp-2" title={description}>
						{description}
					</p>
					{children}
				</div>
			</div>
		</>
	);
};
