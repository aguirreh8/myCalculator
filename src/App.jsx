import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue="123345" />
          <div className="keypad-layout">

          </div>
        </Main>
      </div>
    );
  }
}

export default App;
