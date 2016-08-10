
var Header = React.createClass({
    render: function() {
        return (
            <header>
                <h1>Magiske piksler</h1>
                <Nav />
            </header>
        );
    }
});

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <ul>
                    <li>Hjem</li>
                    <li>Bakgrunn</li>
                </ul>
            </nav>
        );
    }
});

var SnippetGrid = React.createClass({
    render: function() {
        return (
            <p>Snippets</p>
        );
    }
});

ReactDOM.render(
    <main>
        <Header />
        <SnippetGrid />
    </main>,
    document.getElementById('app')
);