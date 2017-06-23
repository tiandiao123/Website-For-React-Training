const title = React.createElement(
    'h1',
    {id:'title',className: 'header'},
    'Hello WOrld'
)

ReactDOM.render(
    title,
    document.getElementById('react-container')
)