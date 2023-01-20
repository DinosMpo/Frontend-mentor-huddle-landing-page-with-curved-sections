import React from 'react';
import './BgSectionTop1.css';

export default function BgSectionTop1() {
	return (
		<div id='bg-section-top-1'>
			<picture>
				<source media="(max-width:600px)" srcset="images/bg-section-top-mobile-1.svg" />
				<img src="images/bg-section-top-desktop-1.svg" alt="" />
			</picture>
		</div>
	)
}