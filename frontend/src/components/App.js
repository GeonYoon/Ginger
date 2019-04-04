import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingContainer from '../containers/landingContainer'
import ArticleDetailContainer from '../containers/articleDetailContainer'
import AuthorDetailContainer from '../containers/authorDetailContainer'


class App extends Component {
    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LandingContainer} />
                    <Route exact path="/article" component={ArticleDetailContainer} />
                    <Route exact path="/author" component={AuthorDetailContainer} />
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    
export default App