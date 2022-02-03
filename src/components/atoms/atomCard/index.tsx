/** @format */

import React from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from '../../shared/wrapper';
import { AtomCardProps } from '../types';

export const AtomCard: React.FC<AtomCardProps> = ({ atom }) => {
	const navigate = useNavigate();
	return (
		<Wrapper
			className="w-[420px] relative flex-col rounded-[10px] mb-[10px] mr-[10px] p-[40px] shadow">
			<a
				onClick={() => navigate(`/atom/${atom.id}`)}
				className="flex-col cursor-pointer">
				<Wrapper className="text-lg font-semibold tracking-wide mb-[10px]">
					{atom.title}
				</Wrapper>
				<Wrapper title={atom.description} className="text-ellipsis text-greyText overflow-hidden h-auto max-h-[70px]">
					{atom.description}
				</Wrapper>
			</a>
		</Wrapper>
	);
};
