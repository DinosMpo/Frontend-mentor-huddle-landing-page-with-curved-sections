import React from 'react';
import './ThirdSection.css';
import BgSectionTop1 from '../BgSectionTop1/BgSectionTop1';
import BgSectionBottom1 from '../BgSectionBottom1/BgSectionBottom1';


export default function ThirdSection() {
	return (
		<section id='third-section'>
			<BgSectionTop1 />
			<div id='third-section-content'>
				<div id='third-section-description'>
					<h1 id='third-section-title'>
						Grow Together
					</h1>
					Generate meaningful discussions with your audience and build a strong, loyal community. 
					Think of the insightful conversations you miss out on with a feedback form. 
				</div>
				<img id='third-section-image' src="images/illustration-grow-together.svg" alt="illustration-grow-together" />
			</div>
			<BgSectionBottom1 />
		</section>
	)
}