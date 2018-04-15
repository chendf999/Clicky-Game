import React from 'react';

import Wrapper from './components/wrapper/wrapper.js';
import Header from './components/header/header.js';
import Card from './components/card/card.js';
import Footer from './components/footer/footer.js';

import cards from './cards.json';

// randomly pick 8 cards to start
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(cards);

let starterCards = cards.slice(0,10);

class App extends React.Component {
	state = {
		score: 0,
		topScore: 0,
		clicked: []
	}

	cardClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.setState({score: this.state.score +1});
			this.setState({clicked: this.state.clicked.concat(id)});
		} else {
			this.setState({score: 0});
			this.setState({clicked: []});
		}
	}

	render(){
		return(
		<Wrapper>
			<Header score={this.state.score} topScore={this.state.topScore}/>

			<section className="container my-5">
				<h2 className="text-center mb-5">George R.R. Martin's death list'</h2>

				{starterCards.map(card => (
					<Card
						image={card.image}
						key={card.id}
						id={card.id}
						cardClick={this.cardClick}
						removeCard={this.removeCard}
					/>
				))}

			</section>

			<Footer/>
		</Wrapper>
	)}
}

export default App;
