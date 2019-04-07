import React, { Component } from 'react';
import Author from './Author';

class AuthorList extends Component {
    showList(author_list,status,number_of_authors){
        if( author_list === undefined){ // First state. website is fetching the information
            return (
                <div>
                     <h2>We are fetching articles. Hang Tight!</h2>
                     <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
        else{ // The list of authors exists at the redux store
            const authors = author_list.map(
                    author => {
                        return (
                            <Author 
                                key = {author[0]}
                                id={author[0]}
                                name = {author[0]}
                                number = {author[1]}
                                author_detail={this.props.author_detail}
                            />
                        )
                    }
                )
                return(
                    <div>
                        <h5 style ={{textAlign: 'center' }}>Authors and how many articles they’ve written over the last 30 days </h5>
                        {this.stillFetching(authors,status,number_of_authors)}
                    </div>
                ) 
         }
        
    }
    stillFetching(authors,status,number_of_authors){
        if(status === false){ // still fetching the data
            return (
                <div>
                    <div>
                        We are fetching articles. Hang Tight!
                        They are top 50 among {number_of_authors} authors so far.
                    </div>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    {authors}
                </div>
            )
        }
        else{ // finish fetching
            return(
                <div>
                    <div>
                        They are top 50 among {number_of_authors} authors.
                    </div>
                    {authors}
                </div>
            )        
        }
    }

    render() {
        const {authors,status,number_of_authors} = this.props
        return (
            <div>
               {this.showList(authors,status,number_of_authors)}    
            </div>
        );
    }
}
export default AuthorList;