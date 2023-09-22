import { ExperienceCard } from 'components/ExperienceCard/ExperienceCard';
import './experience.css';

import React from 'react';
import { Reveal } from 'components/Reveal/Reveal';

export const Experience = () => {
	const experiences = [
		{
			title: 'FULL-STACK DEVELOPER CO-OP · SHIFT',
			desc: 'Developed and styled interactive components for the Shift Browser. Initiated a new collaborative project to revamp the bookmark manager using React and added complex drag and drop functionality to enhance user experience using React DnD. Provided assistance to different team members through knowledge transfer sessions on various topics.',
			date: 'JAN - AUG 2023',
			skills: ['React', 'TypeScript', 'LESS', 'Storybook', 'Jest'],
			url: 'https://tryshift.com/',
		},
		{
			title: 'CODING INSTRUCTOR/DEVELOPER CO-OP · CODE NINJAS KELOWNA',
			desc: 'Taught JavaScript, Python, Scratch, MakeCode and modding in Minecraft to students between the age of 7-14. Organized and conducted summer camps to teach programming in the Roblox game engine. Created a web application to encourage game development and sharing games between peers.',
			date: 'JAN - DEC 2022',
			skills: ['React', 'JavaScript', 'ChakraUI', 'Firebase', 'Netlify'],
			url: 'https://www.codeninjas.com/kelowna-bc-ca?utm_source=google&utm_medium=cpc&utm_campaign=CT_General_General_&utm_content=kelowna-bc-ca&gclid=CjwKCAjwr_CnBhA0EiwAci5silp0KB7YhcdH4qKInNU-zemyVymvmux_dlrUiSMvLNa4bDxiXiljyhoCYz0QAvD_BwE',
		},
		{
			title:
				'UNDERGRADUATE ACADEMIC ASSISTANT · CAMPUS WELLNESS AND EDUCATION - UBCO',
			desc: 'Designed a UI shell for the Canvas LMS using HTML following industry standard design principles.',
			date: 'SEPT - DEC 2021',
			skills: ['HTML', 'UX/UI'],
			url: 'https://www.instagram.com/ubcowellnesspeers/',
		},
	];
	return (
		<div className="section-container">
			<Reveal>
				<div className="header">
					<h3>Explore my </h3>
					<h1>Experience</h1>
				</div>
			</Reveal>

			{experiences.map((exp, index) => {
				const { title, desc, date, skills, url } = exp;
				return (
					<ExperienceCard
						key={index}
						title={title}
						desc={desc}
						date={date}
						skills={skills}
						url={url}
					/>
				);
			})}
		</div>
	);
};
