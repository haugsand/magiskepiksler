import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';
import DesignDetail from './DesignDetail';
import About from './About';
import Edit from './Edit';

class App extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route component={Main}>
                <Route path="/" />
                <Route path="/design" />
                <Route path="/design/:designId" component={DesignDetail} />
                <Route path="/bakgrunn" component={About} />
                <Route path="/endre" component={Edit} />
            </Route>
        </Router>
    );
  }
}

export default App;