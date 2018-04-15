import React from 'react';
import './cardDiv.css';

const CardDiv = props => (
	<div className = "card hoverable col-3">
		<img src={props.image} class="img-fluid" alt="card"/>
	</div>
);

export default CardDiv;