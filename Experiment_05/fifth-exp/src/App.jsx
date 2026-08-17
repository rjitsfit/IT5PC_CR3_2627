import { Link } from "react-router";
import Greetings from "./components/Greetings";
import { Component } from "react";

export default class App extends Component {
  render () {
    return (
    <>
      <div>
      <h3>Welcome to React Router with Vite!</h3>
      <nav>
        <Link to="/about">Go to About Page</Link>
      </nav>
    </div>
    </>
  )
  }
}