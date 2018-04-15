import React from 'react';
import './header.css';

const Header = props => (
	<header>
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
			<div className="container d-flex align-items-center">
				<a className="brand" href="/">Clicky Game</a>
				<ul>
					<li>Score: {props.score}</li>
					<li>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>

		<div className="view">
			<div className="full-bg-img text-center mask rgba-black-light">
				<h1 className="display-5">VALAR MORGHULIS</h1>
				<h3 className="h3-responsive">Welcome to George R.R. Martin's death list'</h3>
			</div>
		</div>
	</header>
);

export default Header