import './startingsection.css';

import React from 'react';

import { EnhanceText } from 'components/EnhanceText/EnhanceText';
import ResumePdf from '../../assets/KaranGohil.pdf';
import { Reveal } from 'components/Reveal/Reveal';

export const StartingSection = () => {
	return (
		<div className="starting-section-container">
			<Reveal hero>
				<div>
					<div className="line">
						<p className="word">Karan</p>
						<p className="word">Gohil</p>
					</div>

					<div className="line">
						<p className="word">Full</p>
						<p className="word">-</p>
					</div>
					<div className="line">
						<p className="word">STACK</p>
						<p className="word">Developer</p>
					</div>

					<div className="line">
						<EnhanceText
							text="->email"
							url="mailto:karandilipsinhgohil@gmail.com"
						/>
						<p className="invisible">77</p>
						<EnhanceText
							text="->linkedin"
							url="https://www.linkedin.com/in/karandilipsinhgohil/"
						/>
					</div>

					<div className="line">
						<EnhanceText text="->github" url="https://github.com/KaranGohil" />
						<EnhanceText text="->resume" url={ResumePdf} />
					</div>
				</div>
			</Reveal>
		</div>
	);
};
