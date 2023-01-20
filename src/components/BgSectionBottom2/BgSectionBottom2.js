import React from 'react';
import './BgSectionBottom2.css';

export default function BgSectionBottom2() {
	return (
		<div className='bg-section-bottom-2'>
			<picture>
				<source media="(max-width:600px)" srcset="images/bg-section-bottom-mobile-2.svg" />
				<img src="images/bg-section-bottom-desktop-2.svg" alt="" />
			</picture>
		</div>
	)
}