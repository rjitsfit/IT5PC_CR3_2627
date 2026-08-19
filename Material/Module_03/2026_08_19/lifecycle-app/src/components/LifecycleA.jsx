import { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name : 'ASDF'
        }
        console.log ('A constructor created')
    }

    static getDerivedStateFromProps (props, state) {
        console.log ('A getDerivedStateFromProps called')
        return null
    }

    componentDidMount () {
        console.log ('A componentDidMount called')
    }

    render () {
        console.log ('A render called')
        return (
            <>
                <h1>Lifecycle A</h1>  
                <LifecycleB />       
            </>
        )
    }
}

export default LifecycleA