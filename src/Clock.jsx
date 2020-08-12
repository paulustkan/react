import React, {Component} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>Timer</h2>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default Clock
