/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ text, children }) => {
	const accordionRef = useRef<HTMLDivElement | null>(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const pageClickEvent = (e: any) => {
			if (
				accordionRef.current !== null &&
				!accordionRef.current.contains(e.target)
			) {
				setIsActive(!isActive);
			}
		};

		if (isActive) {
			window.addEventListener('click', pageClickEvent);
		}

		return () => {
			window.removeEventListener('click', pageClickEvent);
		};
	}, [isActive]);

	return (
		<>
			<div
				className="flex px-4 justify-between items-center w-full h-fit bg-white"
				onClick={() => setIsActive(!isActive)}
			>
				{text}
				<p>{isActive ? '▴' : '▾'}</p>
			</div>
			{isActive && <div ref={accordionRef}>{children}</div>}
		</>
	);
};
