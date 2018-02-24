import React, { Component } from 'react';



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
        return <button
            type="button"
            className="btn btn-outline-primary"
            onClick={ this.handleChange }>
            New Quote
            </button>
    }
}


export default Button;