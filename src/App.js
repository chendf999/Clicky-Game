import React from 'react';

import Wrapper from './components/wrapper/wrapper.js';
import Header from './components/header/header.js';
import Card from './components/card/card.js';
import Footer from './components/footer/footer.js';

import cards from './cards.json';

class App extends React.Component {
	render(){
		return(
		<Wrapper>
			<Header/>

			<section className="container my-5">
				<h2 className="text-center mb-5">George R.R. Martin's death list'</h2>

				{cards.map(card => (
					<Card image={card.image} key={card.id}/>
				))}

			</section>

			<Footer/>
		</Wrapper>
	)}
}

export default App;
