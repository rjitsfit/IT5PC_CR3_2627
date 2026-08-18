import { Component } from "react";
import Greetings from "./components/Greetings";
import Props from "./components/Props";
import State from "./components/State";

class App extends Component {
  render () {
    return (
      <>
        {/* <h1>Hello World</h1> */}
        {/* <Greetings /> */}
        {/* <Props name="Peter Parker" />
        <Props name="Bruce Banner" /> */}
        <State />
      </>
    )
  }
}

export default App