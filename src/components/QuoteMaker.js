import React, { Component } from 'react';
import { styles } from '../../style/styles';

class QuoteMaker extends Component {
  
    render() {
        const quote = this.props.quote;
        const author = this.props.author;
        return (
            <div className="quote-box" style={styles.text}>
                <blockquote className="blockquote" style={styles.blockquote} >
                    <p className="text">{quote}</p>
                    <cite className="author blockquote-footer">{author}</cite>
                </blockquote>
            </div>
        );
    }
}

export default QuoteMaker;