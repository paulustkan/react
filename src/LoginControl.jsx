import React, {Component} from 'react'

const TextLogin = () => {
    return <h2>Welcome back!</h2>
}

const TextLogout = () => {
    return <h2>Goodbye!</h2>
}

const ButtonLogin = (props) => {
    return <button onClick={props.onClick}>Login</button>
}

const ButtonLogout = (props) => {
    return <button onClick={props.onClick}>Logout</button>
}

function MailBox(props) {
    const unreadMessages = props.unreadMessages
    const statusLogin = props.statusLogin

    return (
        <div>
            <h3>Your MailBox</h3>
            {/* If */}
            {unreadMessages.length > 0 &&
                <p>You have {unreadMessages.length} unread!</p>
            }

            {/* If else */}
            {statusLogin
                ? <p>You still login unread!</p>
                : <p>You logouted</p>
            }
        </div>
    )
}

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    login = () => {
        this.setState({
            isLogin: true
        })
    }

    logout = () => {
        this.setState({
            isLogin: false
        })
    }

    render() {
        let text, button
        const messages = [1,2,3];

        if (this.state.isLogin) {
            text = <TextLogin />
            button = <ButtonLogout onClick={this.logout}/>
        } else {
            text = <TextLogout />
            button = <ButtonLogin onClick={this.login}/>
        }

        return <div>{text} {button} <MailBox unreadMessages={messages} statusLogin={this.state.isLogin}/></div>
    }
}

export default LoginControl
