import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Clock from './Clock'
import LoginControl from './LoginControl'
import Warning from './Warning'

class App extends Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            {
                name: 'dktran',
                job: 'full-stack',
            },
        ]
    }

    removeCharacters = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    render() {
        return (
            <div className="app">
                <h1>Hello React</h1>
                <Form handleSubmit={this.handleSubmit}/>
                <Table characterData={this.state.characters} removeCharacters={this.removeCharacters} />
                <hr />
                <Api />
                <hr />
                <Clock />
                <hr />
                <LoginControl />
                <hr />
                <Warning />
            </div>
        )
    }
}

export default App
