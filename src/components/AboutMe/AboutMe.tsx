import './aboutme.css';

import React from 'react';
import profile from '../../assets/profile.png';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Reveal } from 'components/Reveal/Reveal';

export const AboutMe = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	return (
		<div className="section-container">
			<Reveal>
				<div className="header">
					<h3>Get To Know More</h3>
					<h1>About Me</h1>
				</div>
			</Reveal>
			<Reveal>
				<div
					className={classNames('about-me-content', { 'is-mobile': isMobile })}
				>
					<div className="image-container">
						<img src={profile} alt="Profile Pic" />
					</div>
					<div className="about-me-text">
						<p>
							Hello, I&apos;m Karan Gohil, a passionate full-stack developer
							with a strong focus on front-end technologies, particularly React.
							In the past, I have transformed creative ideas into functional,
							user-friendly applications. My proficiency extends beyond the
							front end, as I have also dabbled in Python, crafting automation
							solutions and bots to streamline processes in my early years of
							university.
						</p>

						<p>
							One of my defining traits is my ability to learn quickly and adapt
							to new challenges. Another one is teamwork as I understand the
							value of collaboration, communication, and working together to
							achieve a common goal. As I approach my graduation in December
							2023, I&apos;m eager to transition into a full-time role and bring
							my skills to innovative projects.
						</p>

						<p>
							When I&apos;m not working on making beautiful UI components,
							I&apos;m travelling! Exploring different food and cultures around
							the world. Also playing video games.
						</p>
					</div>
				</div>
			</Reveal>
		</div>
	);
};
