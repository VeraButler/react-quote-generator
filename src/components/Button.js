import React, { Component } from 'react';
import { styles } from '../../style/styles';



class Button extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const size = this.props.size;
        const quote = this.props.quote;
        this.props.changeQuote(quote, size);
        
    }

    render() {
        const quote = this.props.quote;
        return (
            <div style={styles.buttons} >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={styles.button}
                onClick={this.handleChange}>
                New Quote
                </button>
                <a className="tweet" style={styles.button}>tweet</a>
            </div>
        );
    }
}


export default Button;