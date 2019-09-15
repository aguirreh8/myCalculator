import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";
import NumberKeypad from "./components/NumberKeypad";

class App extends Component {
  state = {
    currentValue: "0"
  };

  handleDisplayInput = input => {
    if (this.state.currentValue !== "0") {
      this.setState({
        currentValue: this.state.currentValue + input
      });
    } else {
      this.setState({
        currentValue: input
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue={this.state.currentValue} />
          <div className="keypad-layout">
            <div className="keypad-numBtn-layout">
              <NumberKeypad
                value="1"
                handleDisplayInput={this.handleDisplayInput}
              >
                1
              </NumberKeypad>
              <NumberKeypad
                value="2"
                handleDisplayInput={this.handleDisplayInput}
              >
                2
              </NumberKeypad>
              <NumberKeypad
                value="3"
                handleDisplayInput={this.handleDisplayInput}
              >
                3
              </NumberKeypad>
              <NumberKeypad
                value="4"
                handleDisplayInput={this.handleDisplayInput}
              >
                4
              </NumberKeypad>
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
