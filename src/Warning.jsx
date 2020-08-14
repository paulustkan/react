import React, {Component} from 'react'

function Text(props) {
    if (! props.warn) {
        return null
    }

    return <p>Warniiiiiiiiiiiiiing!!!!!!!!</p>
}

class Warning extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            warning: true
        }
    }

    handleWarning = () => {
        this.setState((state) => ({
            warning: !state.warning
        }))

    }

    render() {
        return (
            <div>
                <Text warn={this.state.warning} />
                <button onClick={this.handleWarning}>{this.state.warning ? 'Hide' : 'Show'}</button>
            </div>
        )
    }
}

export default Warning
