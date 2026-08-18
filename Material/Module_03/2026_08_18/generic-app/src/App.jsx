import { Component } from "react";
import Greetings from "./components/Greetings";

class App extends Component {
  render () {
    return (
      <>
        <h1>Hello World</h1>
        <Greetings />
      </>
    )
  }
}

export default App