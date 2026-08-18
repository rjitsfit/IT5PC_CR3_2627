// Stateless Application - Functional 
export default function Props (props) {
    return (
        <>
            <h1>Hello {props.name}</h1>
        </>
    )
}


// Stateful Application - Class-driven
// import { Component } from "react";

// export default class Props extends Component {
//     render () {
//         return (
//             <>
//                 <h2>Hello {this.props.name}</h2>            
//             </>
//         )
//     }
// }