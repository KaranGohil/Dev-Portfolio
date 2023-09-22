import './herosection.css';

import React from 'react';
import profile from '../../assets/profile.png';
import { Button } from 'components/Button/Button';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { Typewriter } from 'components/Typewriter/Typewriter';

export const HeroSection = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	return (
		<div className="herosection">
			<div
				className={classNames('herosection-container', {
					'is-mobile': isMobile,
				})}
			>
				<img
					className={classNames({ 'is-mobile': isMobile })}
					src={profile}
					alt="Profile Pic"
				/>
				<div className="herosection-text">
					<h3>{"Hello I'm"}</h3>
					<Typewriter />
					<h2>Full-Stack Developer</h2>
					<div className="herosection-buttons">
						<Button
							title="Resume"
							onClick={() =>
								window.open('https://github.com/KaranGohil', '_blank')
							}
						/>
						<Button title="GitHub" />
					</div>
				</div>
			</div>
		</div>
	);
};
