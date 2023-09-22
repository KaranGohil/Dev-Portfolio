import './skillblob.css';

import React from 'react';

interface SkillBlobProps {
	skill: string;
}

export const SkillBlob = ({ skill }: SkillBlobProps) => {
	return <div className="skill-blob">{skill}</div>;
};
