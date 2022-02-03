/** @format */

import React from 'react';
import { Wrapper } from '../shared/wrapper';
import { AtomCard } from './atomCard';
import { Atom } from './types';

const mockAtoms: Atom[] = [
	{
		id: '1',
		title: 'Atom 1',
		description:
			'This is a description where I can describe what my atom does and when to implement every atom or piece of this atom in particular.',
	},
	{
		id: '2',
		title: 'Atom 2',
		description:
			'This is a description where I can describe what my atom does and when to implement every atom or piece of this atom in particular.',
	},
	{
		id: '3',
		title: 'Atom 3',
		description:
			'This is a description where I can describe what my atom does and when to implement every atom or piece of this atom in particular.',
	},
];

export const Atoms = () => {
	return (
		<Wrapper className="flex-wrap mt-[10px]">
			{mockAtoms.map(atom => <AtomCard key={atom.id} atom={atom} />)}
		</Wrapper>
	);
};
