import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import { DateConverter } from '../../utils/util'


class Article extends Component {
    render() {
        const {id,title,author,summary,updated} = this.props;
        return (
            <div className="card darken-1" key={id}>
                <Link to={{pathname:'/article', state:{"id":id,"title":title,"authors":author,"summary":summary} }} >
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                    </div>
                </Link>
                <div className="card-action">
                        <div>Updated : {DateConverter(updated)}</div>
                </div>
            </div>
        );
    }
}
export default Article;