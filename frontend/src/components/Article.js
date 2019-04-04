import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import './css/article.css';

class Article extends Component {
    
    render() {
        const {id,title,author,summary} = this.props;
        return (
            <div className="card darken-1" key={id}>
                <Link to={{pathname:'/article', state:{"id":id,"title":title,"authors":author,"summary":summary} }} >
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Article;