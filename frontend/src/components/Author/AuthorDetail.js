import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DateConverter } from '../../utils/util'

class AuthorDetail extends Component {
    render() {
        const authors = this.props.payload.map(
            author => {
                return (
                    <div className="card darken-1" key={author.id}>
                        <Link to={{pathname:'/article', state:{"id":author.id,"title":author.title,"authors":author.author,"summary":author.summary} }} >
                            <div className="card-content">
                                <span className="card-title">{author.title}</span>
                            </div>
                        </Link>
                        <div className="card-action">
                            <div>Updated : {DateConverter(author.updated)}</div>
                        </div>
                    </div>
                )
            }
        )
        return (
            <div>
                <h5 style ={{textAlign: 'center' }}>Articles <i>{this.props.name}</i> has submitted over the past 30 days.</h5>   
                {authors}
            </div>
        );
    }
}
export default AuthorDetail;