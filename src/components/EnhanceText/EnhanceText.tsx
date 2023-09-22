import './enhancetext.css';

import React from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

interface EnhanceTextProps {
	text: string;
	url: string;
}

export const EnhanceText = ({ text, url }: EnhanceTextProps) => {
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	const splitText = text.split('');

	return (
		<a
			className={classNames('enhance-text-link', 'word', text.substring(2))}
			target="_blank"
			rel="noreferrer"
			onClick={() => {
				isMobile ? setTimeout(() => window.open(url), 600) : window.open(url);
			}}
		>
			{splitText.map((letter, index) => {
				return (
					<span key={index} className="letter">
						{letter}
					</span>
				);
			})}
		</a>
	);
};
