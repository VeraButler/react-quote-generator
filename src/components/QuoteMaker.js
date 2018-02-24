import React, { Component } from 'react';


class QuoteMaker extends Component {
  
    render() {
        const quote = this.props.quote;
        const author = this.props.author;
        return (
            <div className="quote-box">
                <blockquote className="blockquote">
                    <p className="text">{quote}</p>
                    <cite className="author blockquote-footer">{author}</cite>
                </blockquote>
                <a className="tweet">tweet</a>
            </div>
        );
    }
}

export default QuoteMaker;