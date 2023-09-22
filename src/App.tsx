import { AboutMe } from 'components/AboutMe/AboutMe';
import { Experience } from 'components/Experience/Experience';
import { ProjectSection } from 'components/ProjectSection/ProjectSection';
import { StartingSection } from 'components/StartingSection/StartingSection';
import React from 'react';

const App: React.FC = () => {
	return (
		<>
			<StartingSection />
			<AboutMe />
			<Experience />
			<ProjectSection />
		</>
	);
};

export default App;
