import React from 'react';
import './BgSectionBottom1.css';

export default function BgSectionBottom1() {
	return (
		<div className='bg-section-bottom-1'>
			<picture>
				<source media="(max-width:600px)" srcset="images/bg-section-bottom-mobile-1.svg" />
				<img src="images/bg-section-bottom-desktop-1.svg" alt="" />
			</picture>
		</div>
	)
}