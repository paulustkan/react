import React, {Component} from 'react'
import Table from './Table.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters : [
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
            ]
        }
    }

    removeCharacters = (i) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((item, key) => {
                return key !== i;
            })
        });
    }


    render() {
        return (
            <div className="App">
                <h1>Hello React!</h1>
                <Table
                    characterData={this.state.characters}
                    removeCharacters={this.removeCharacters}
                />
            </div>
        );
    }
}

export default App
