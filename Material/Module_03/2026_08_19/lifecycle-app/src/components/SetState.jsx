import { Component } from "react";

export default class SetState extends Component {
    constructor (props) {
        super (props)

        this.state = {
            count : 0
        }
    }

    // DO NOT USE THIS UNDER ANY CIRCUMSTANCES
    // increments () {
    //     this.state.count = this.state.count + 1
    //     console.log (`${this.state.count}`)
    // }

    // CALLBACKS ARE NOT SYNC
    // increments () {
    //     this.setState ({
    //         count : this.state.count + 1
    //     }, () => {
    //         console.log (`Callback : ${this.state.count}`)
    //     })
    // }

    increments () {
        this.setState ((prevState) => ({
            count : prevState.count + 1
        }))
        console.log (this.state.count)
    }

    fiveIncrements () {
        this.increments ()
        this.increments ()
        this.increments ()
        this.increments ()
        this.increments ()
    }
    
    render () {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.fiveIncrements()}>
                    Click
                </button>
            </>
        )
    }
}