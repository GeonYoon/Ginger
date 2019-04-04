import React, { Component } from  'react';
// import './css/Message.css';

class Article extends Component {
    
    render() {
        const {id,title} = this.props;
        return (
            <div className="card darken-1" key={id}>
                <div className="card-content">
                    <span className="card-title">{title}</span>
                </div>
            </div>
        );
    }
}

export default Article;