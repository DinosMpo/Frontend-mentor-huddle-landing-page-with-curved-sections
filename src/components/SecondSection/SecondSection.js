import React from 'react';
import './SecondSection.css';
import BgSectionBottom2 from '../BgSectionBottom2/BgSectionBottom2';

export default function SecondSection() {
	return (
		<section id='second-section'>
			<img src="images/screen-mockups.svg" alt="screen-mockups" />
			<div id="second-section-content">
				<div id="second-section-content-first">
					<img src="images/icon-communities.svg" alt="icon-communities" />
					<div id="second-section-content-first-achieved">1.4k+</div>
					<div id="second-section-content-first-description">Communitites Formed</div>
				</div>
				<div id="second-section-content-second">
					<img src="images/icon-messages.svg" alt="icon-messages" />
					<div id="second-section-content-second-achieved">2.7m+</div>
					<div id="second-section-content-second-description">Messages Sent</div>
				</div>
			</div>
		</section>
	)
}