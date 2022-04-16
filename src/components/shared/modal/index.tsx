/** @format */

import React from 'react';
import { Link } from '../link';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
	children,
	open = false,
	closeModal,
	content,
}) => {
	return (
		<>
			<div
				className={`${open ? 'grid' : 'hidden'} place-items-center fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-greyTransparent`}
			>
				<div
					style={{ border: '1px solid #888' }}
					className="rounded-md relative bg-white w-9/12 p-6"
				>
					<div className="absolute right-6">
						<Link type="primary" onClick={closeModal}>
							<small>close</small>
						</Link>
					</div>
					{content}
				</div>
			</div>
			{children}
		</>
	);
};
