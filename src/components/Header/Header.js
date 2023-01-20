import React from 'react';
import './Header.css';
import TryIt from '../TryIt/TryIt';

export default function Header() {
	return (
		<header>
			<main>
				<div>
					<img src="/images/logo.svg" alt="icon message" />
				</div>
			</main>
			<TryIt />
		</header>
	)
}