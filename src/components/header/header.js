import React from 'react';
import './header.css';

const Header = () => (
	<header>
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
			<div className="container d-flex align-items-center">
				<a className="brand" href="/">Clicky Game</a>
				<ul>
					<li>Score</li>
					<li>Top Score</li>
				</ul>
			</div>
		</nav>

		<div className="view">
			<div className="full-bg-img text-center mask rgba-black-light">
				<h1 className="display-5">VALAR MORGHULIS</h1>
				<h3 className="h3-responsive">Click on an image to earn points. Don't click the same image twice!</h3>
			</div>
		</div>
	</header>
);

export default Header