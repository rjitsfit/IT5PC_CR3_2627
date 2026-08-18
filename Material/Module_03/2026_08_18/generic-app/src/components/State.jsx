import { Component } from "react";

export default class State extends Component {
    constructor () {
        super ()
        this.state = {
            message : 'This is a message'
        }
    }

    changeHandler () {
        this.setState ({
            message : 'The message has changed'
        })
    }


    render () {
        return (
            <>
                <h1>{this.state.message}</h1>

                <button onClick={()=>this.changeHandler()}>
                    Click
                </button>
            </>
        )
    }
}