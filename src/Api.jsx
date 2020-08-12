import React, {Component} from 'react'

class Api extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = "https://en.wikipedia.org/w/tapi.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            })
    }

    render() {
        const {data} = this.state
        const li = data.map((item, index) => {
            return <li key={index}>{item}</li>
        })

        return <ul>{li}</ul>
    }
}

export default Api
