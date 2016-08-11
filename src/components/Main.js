import React from 'react';

import Header from './Header';
import SnippetGrid from './SnippetGrid';

class Main extends React.Component {
    render() {
        return (
        	<main>
                <Header />
                <SnippetGrid />


                {this.props.children}
            </main>
        )
    }
}

export default Main;