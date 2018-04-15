import React from 'react';
import './card.css';

const Card = props => (
	<div className = "card hoverable">
		<img src={props.image} class="img-fluid" alt="card"/>
	</div>
);

export default Card;