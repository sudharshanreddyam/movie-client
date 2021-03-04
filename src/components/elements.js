import React, { Component, PureComponent } from 'react'

export class Elements extends Component {
    render() {
        return React.createElement('div', null, 'Hello React CreateElement!');
    }
}

export class Elements2 extends PureComponent {
    render() {
        return (
            <div>
                Hello React Pure Component!
            </div>
        )
    }
}

export default Elements;