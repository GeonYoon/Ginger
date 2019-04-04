import React, { Component } from  'react';
class ArticleDetails extends Component {
    
    showAuthors(authors){
        if(authors instanceof Array){
            return authors.map(author =>{
                return(
                    <span key={author.name}> {author.name} |</span>
                )
            })
        }
        else{
            return <span key={authors.name}> {authors.name} |</span>
        }
       
    }

    render() {
        const{id, title, summary, authors} = this.props
        return (
        <div className="card darken-1" key={id}>
            <div className="card-content">
                <span className="card-title"><b>{title}</b></span>
                <p>
                    {summary}
                </p>
            </div>
            <div className="card-action">
                Authors: {this.showAuthors(authors)}
            </div>

        </div>
        );
    }
}

export default ArticleDetails;