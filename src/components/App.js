import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


import Main from './Main';
import SnippetGrid from './SnippetGrid';
import SnippetDetail from './SnippetDetail';
import About from './About';
import Edit from './Edit';

class App extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route component={Main}>
                <Route path="/" component={SnippetGrid} />
                <Route path="/snippet" component={SnippetGrid} />
                <Route path="/snippet/:snippetId" component={SnippetDetail} />
                <Route path="/bakgrunn" component={About} />
                <Route path="/endre" component={Edit} />
            </Route>
        </Router>
    );
  }
}

export default App;