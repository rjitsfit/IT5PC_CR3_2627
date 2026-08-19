import { Component } from "react";

class LifecycleB extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name : 'ASDF'
        }
        console.log ('B constructor created')
    }

    static getDerivedStateFromProps (props, state) {
        console.log ('B getDerivedStateFromProps called')
        return null
    }

    componentDidMount () {
        console.log ('B componentDidMount called')
    }

    render () {
        console.log ('B render called')
        return (
            <>
                <h1>Lifecycle B</h1>         
            </>
        )
    }
}

export default LifecycleB