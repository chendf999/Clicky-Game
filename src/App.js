import React from 'react';

import Wrapper from './components/wrapper/wrapper.js';
import Header from './components/header/header.js';
import Card from './components/card/card.js';
import Footer from './components/footer/footer.js';

import cards from './cards.json';

// randomly pick 8 cards to start
const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(cards);

class App extends React.Component {
	state = {
		cards: cards,
		score: 0,
		topScore: 0,
		clicked: []
	}

	cardClick = (id, quote) => {
		// score ++
		if (this.state.clicked.indexOf(id) === -1) {
			// set top score
			if (this.state.score >= this.state.topScore) {
				this.setState({topScore: this.state.score+1});
			}

			// update score deck
			this.setState({score: this.state.score +1});
			this.setState({clicked: this.state.clicked.concat(id)});

			// shuffle cards
			shuffle(cards);
			this.setState({cards: cards});

		// game over
		} else {
			alert('Your\'re dead: \n\n' + quote);
			// reset deck
			this.setState({score: 0});
			this.setState({clicked: []});
		}
	}

	render(){
		return(
		<Wrapper>
			<Header score={this.state.score} topScore={this.state.topScore}/>

			<section className="container my-5">
				<h5 className="text-center mb-5">Click on the same image twice, and you you're dead.</h5>

				{this.state.cards.slice(0,10).map(card => (
					<Card
						image={card.image}
						key={card.id}
						id={card.id}
						quote={card.quote}
						cardClick={this.cardClick}
					/>
				))}

			</section>

			<Footer/>
		</Wrapper>
	)}
}

export default App;
