import React, { Component } from  'react';
import '../css/Author.css';

class Author extends Component {
    render() {
        const {number,name,id} = this.props;
        return (
            <div className="card darken-1 author-name" onClick={() => this.props.author_detail(name,this.props.history)} key={id}>
                <div className="card-content ">
                    <span className="card-title ">{name}</span>
                </div>
                <div className="card-action">
                        <div>The number of articles the author wrote in the past 30 days: {number}</div>
                </div>
            </div>
        );
    }
}

export default Author;