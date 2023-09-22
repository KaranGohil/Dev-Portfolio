import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealProps {
	children: JSX.Element;
	width?: 'fit-content' | '100%';
	hero?: boolean;
}

export const Reveal = ({
	children,
	width = 'fit-content',
	hero = false,
}: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView, mainControls]);

	return (
		<div
			ref={ref}
			style={{
				position: 'relative',
				width,
				overflow: 'hidden',
				padding: hero ? '2rem' : '0',
			}}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, x: hero ? 0 : -75 },
					visible: { opacity: 1, x: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
};
