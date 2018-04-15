import React from 'react';
import './card.css';

const Card = props => (
	<div className = "card hoverable"
		onClick={(id, quote) => props.cardClick(props.id, props.quote)} >
		<img src={props.image} className="img-fluid" alt={props.quote} />
	</div>
);


export default Card;