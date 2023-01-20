import React from 'react';
import './FirstSection.css';
import GetStarted from '../GetStarted/GetStarted';

export default function FirstSection() {
	return (
		<section id='first-section'>
			<h1 id='first-section-title'>Build The Community Your Fans Will Love</h1>
			<div id='first-section-description'>
				Huddle re-imagines the way we build communities. You have a voice, but so does 
				your audience. Create connections with your users as you engage in genuine discussion. 
			</div>
			<GetStarted />
		</section>
	)
}