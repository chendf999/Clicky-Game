import React from 'react';
import './card.css';

const Card = props => (
	<div className = "card hoverable col-3">
		<img src={props.image} class="img-fluid" alt="card"/>
	</div>
);

export default Card;