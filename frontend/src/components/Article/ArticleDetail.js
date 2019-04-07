import React, { Component } from  'react';
import '../css/ArticleDetail.css';

class ArticleDetails extends Component {
    
    showAuthors(authors){
        if(authors instanceof Array){ // more than one author wrote the article
            return authors.map(author =>{
                return(
                    <span className="author-name" onClick={() => this.props.author_detail(author.name,this.props.history)} key={author.name}> {author.name} </span>
                )
            })
        }
        else{ // only one author wrote the article
            return <span className="author-name" onClick={() => this.props.author_detail(authors.name,this.props.history)} key={authors.name}> {authors.name} </span>
        }
    }
    render() {
        const{id, title, summary, authors} = this.props
        return (
        <div className="card darken-1" key={id}>
            <div className="card-content">
                <span className="card-title"><b>{title}</b></span>
                <p>{summary}</p>
            </div>
            <div className="card-action">Authors: {this.showAuthors(authors)} </div>
            </div>
        );
    }
}

export default ArticleDetails;