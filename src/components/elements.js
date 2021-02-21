import React, { Component, PureComponent } from 'react'

class elements extends Component {
    render() {
        return React.createElement('div', null, 'Hello React CreateElement!');
    }
}

class elements2 extends PureComponent {
    render() {
        return (
            <div>
                Hello React Pure Component!
            </div>
        )
    }
}

export default elements;