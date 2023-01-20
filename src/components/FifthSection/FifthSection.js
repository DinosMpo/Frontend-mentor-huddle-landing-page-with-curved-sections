import React from 'react';
import './FifthSection.css';
import BgSectionTop2 from '../BgSectionTop2/BgSectionTop2';
import BgSectionBottom2 from '../BgSectionBottom2/BgSectionBottom2';

export default function FifthSection() {
	return (
		<section id='fifth-section'>
			<BgSectionTop2 />
			<div id="fifth-section-content">
				<div id="fifth-section-description">
					<h1 id="fourth-section-title">
						Your Users
					</h1>
					It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
					once signed in to your app, your users can start chatting immediately.
				</div>
				<img src="images/illustration-your-users.svg" alt="illustration-your-users" id="fifth-section-image" />
			</div>
			<BgSectionBottom2 />
		</section>
	)
}