import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    showList(articles){
        if( articles === undefined){ // fetching the aritcles for the first time
            return ( 
                    <div>
                        <h4>We are fetching articles. Hang Tight!</h4>
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
            )
        }
        else{  // the list of the article exist at the redux store
            const articleList = this.props.articles.map(
                article => {
                    return (
                        <Article 
                            key = {article.title}
                            id={article.title}
                            title = {article.title}
                            summary = {article.summary}
                            author = {article.author}
                            updated = {article.updated}
                        />
                    )
                }
            )
            return(
                <div>
                    <h5 style ={{textAlign: 'center' }}>Articles relevant to psychiatry, therapy, data science or machine learning</h5>   
                    {articleList}
                </div>
            ) 
         }
        
    }

    render() {
        const {articles,fetch_more_articles,article_number} = this.props
        return (
            <div>
               {this.showList(articles)} 
               <div className="fixed-action-btn" onClick={() =>fetch_more_articles(article_number)}>
                    <div className="btn-floating btn-large card brown lighten-2">
                        <i className="material-icons ">add</i>
                    </div>
                </div>    
            </div>
        );
    }
}
export default ArticleList;