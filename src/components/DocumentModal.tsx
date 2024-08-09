'use client';
import { Modal, ModalContent } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { ReactNode, useState } from 'react';
export default function DocumentModal(props: {
	id: string;
	buttonText: string;
	document: ReactNode;
}) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				variant={'flat'}
				color={'primary'}
				onClick={() => {
					setOpen(true);
				}}
			>
				{props.buttonText}
			</Button>
			<Modal isOpen={open} onOpenChange={setOpen}>
				<ModalContent className="doc p-6 sm:max-w-[425px]">
					{/* @ts-ignore */}
					{props.document}
				</ModalContent>
			</Modal>
		</>
	);
}
