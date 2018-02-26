
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuoteMaker from './components/QuoteMaker';
import Button from './components/Button';
import { styles } from '../style/styles'


const quote = [
    [
        "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        "Dr. Suess"
    ],
    [
        "You must never feel badly about making mistakes ... as long as you take the trouble to learn from them. For you often learn more by being wrong for the right reasons than you do by being right for the wrong reasons",
        "The Phantom Tollbooth by Norton Juster"
    ],
    [
        "I don't understand it any more than you do, but one thing I've learned is that you don't have to understand things for them to be.",
        "A Wrinkle in Time by Madeleine L'Engle"
    ],
    [
       "Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?",
        "Harry Potter and the Deathly Hollows by J.K. Rowling"
    ],
    [
       "I am not afraid of storms for I am learning to sail my ship.",
       "Little Women by Louisa May Alcott"
    ],
    [
        "How lucky I am to have something that makes saying goodbye so hard.",
        "The Adventures of Winnie the Pooh by A.A. Milne"
    ]
];

const size = quote.length;

const ranArray = (array, size) => {
    const num = Math.floor(Math.random() * (size-1));
    return array[num];
};
const newQuote = ranArray(quote, size);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote:  newQuote[0],
            author:  newQuote[1]
        }

        this.changeQuote = this.changeQuote.bind(this);
    }

    changeQuote(quote, size) {
        let newQuote = ranArray(quote, size);
        this.setState({
            quote: newQuote[0],
            author: newQuote[1]
        })

    }
    render() {
        return (
            <div className="quote-box card" style={styles.container}>
                <h1 className="card-title" style={styles.title}>Quote Generator</h1>
                <hr />
            <QuoteMaker
                quote={this.state.quote}
                author={this.state.author}/>
            <Button
                    quote={quote}
                    size={size}
                changeQuote={this.changeQuote} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));