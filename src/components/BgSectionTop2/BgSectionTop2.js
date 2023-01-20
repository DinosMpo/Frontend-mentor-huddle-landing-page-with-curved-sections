import React from 'react';
import './BgSectionTop2.css';

export default function BgSectionTop2() {
	return (
		<div id='bg-section-top-2'>
			<picture>
				<source media="(max-width:600px)" srcset="images/bg-section-top-mobile-2.svg" />
				<img src="images/bg-section-top-desktop-2.svg" alt="" />
			</picture>
		</div>
	)
}