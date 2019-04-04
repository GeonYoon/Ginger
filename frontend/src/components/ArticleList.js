import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render() {
        console.log(this.props.articles)
        const articleList = this.props.articles.map(
            article => {
                return (
                    <Article 
                        key = {article.id}
                        title = {article.title}
                        summary = {article.summary}
                    />
                )
            }
        )
        return (
            <div>
               {articleList}    
            </div>
        );
    }
}
export default ArticleList;