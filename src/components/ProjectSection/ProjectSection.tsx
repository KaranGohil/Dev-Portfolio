import { CardContent } from 'components/CardContent/CardContent';
import './projectsection.css';

import React from 'react';
import { Reveal } from 'components/Reveal/Reveal';

export const ProjectSection = () => {
	const projects = [
		{
			title: 'JobScraper-Indeed',
			desc: 'A web scraper retrieves job listings and their descriptions from indeed.ca. A report that identifies the most sought-after hard skills among various tech jobs. Additionally, it determines similarities between different jobs based on their required hard skills.',
			skills: [
				'Python',
				'BeautifulSoup',
				'Pandas',
				'Matplotlib',
				'Jupyter-Notebook',
				'nltk',
				'scikit-learn',
			],
			url: 'https://github.com/KaranGohil/JobScraper-Indeed/tree/master',
		},
		{
			title: 'FocusTime',
			desc: 'A timer app which keeps track of all the tasks/activity a user has focused on in a day.',
			skills: [
				'React',
				'React-Native',
				'JavaScript',
				'CSS',
				'Expo',
				'Expo-cli',
			],
			url: 'https://snack.expo.dev/@karangohil/focustime',
		},
		{
			title: 'IMDBot - Movie Chat Bot',
			desc: 'A chat bot which is knowledgeable in the movies',
			skills: ['Python', 'IMDbPY', 'nltk', 'spaCy', 'chatterbot'],
			url: 'https://github.com/KaranGohil/IMDBot-Movie-Chat-Bot',
		},
	];
	return (
		<>
			<Reveal width="100%">
				<div className="project header">
					<h3>Browse My Recent</h3>
					<h1>Projects</h1>
				</div>
			</Reveal>
			<div className="project section-container">
				{projects.map((project, index) => {
					const { title, desc, skills, url } = project;
					return (
						<CardContent
							classname="projects-card-content"
							key={index}
							title={title}
							desc={desc}
							skills={skills}
							url={url}
						/>
					);
				})}
			</div>
		</>
	);
};
