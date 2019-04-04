import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ArticleListContainer from '../containers/ArticleListContainer'
import ArticleDetailContainer from '../containers/articleDetailContainer'
import AuthorDetailContainer from '../containers/authorDetailContainer'
import Header from './Header';


class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Route exact path="/" component={ArticleListContainer} />
                    <Route exact path="/article" component={ArticleDetailContainer} />
                    <Route exact path="/author" component={AuthorDetailContainer} />
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    
export default App