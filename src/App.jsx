import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";
import KeypadLayout from "./components/KeypadLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue="123345" />
          <KeypadLayout>
            <p>123</p>
          </KeypadLayout>
        </Main>
      </div>
    );
  }
}

export default App;
