import React from 'react';
import './card.css';

const Card = props => (
	<div className = "card hoverable" onClick={(id) => props.cardClick(props.id)} >
		<img src={props.image} className="img-fluid" alt="card"/>
	</div>
);


export default Card;