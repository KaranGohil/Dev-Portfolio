import './hamburgerMenu.css';

import React, { useState } from 'react';
import classNames from 'classnames';

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="hamburger-menu">
			<div
				className={classNames('hamburger-icon', { 'is-open': isOpen })}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isOpen && (
				<ul className="hamburger-links">
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Experience</a>
					</li>
					<li>
						<a href="">Projects</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			)}
		</div>
	);
};
