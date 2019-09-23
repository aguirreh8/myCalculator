import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";
import NumberKeypad from "./components/NumberKeypad";
import OperandKeypad from "./components/OperandKeypad";

class App extends Component {
  state = {
    currentValue: "0",
    operand: ""
  };

  handleDisplayInput = input => {
    let t = input.toString();
    if (this.state.currentValue !== "0") {
      this.setState({
        currentValue: this.state.currentValue + t
      });
    } else {
      this.setState({
        currentValue: t
      });
    }
  };

  render() {
    const numButtons = [];

    for (let i = 0; i < 10; i++) {
      let j = i + 1;
      if (j < 10) {
        numButtons.push(
          <NumberKeypad 
            value={j} 
            handleDisplayInput={this.handleDisplayInput} 
            btnStyle="keypad-number-btn">
              {j}
          </NumberKeypad>
        )
      } else {
        j = 0;
        numButtons.push(
          <NumberKeypad value={j} handleDisplayInput={this.handleDisplayInput} btnStyle="keypad-number-btn-large">
            {j}
          </NumberKeypad>
        )
      }
    }

    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue={this.state.currentValue} />
          <div className="keypad-layout">
            <div className="keypad-numBtn-layout">{numButtons}</div>
            <div className="keypad-opBtn-layout">
              <OperandKeypad btnStyle="keypad-operand-btn">+</OperandKeypad>
              <OperandKeypad btnStyle="keypad-operand-btn">-</OperandKeypad>
              <OperandKeypad btnStyle="keypad-operand-btn">x</OperandKeypad>
              <OperandKeypad btnStyle="keypad-operand-btn">/</OperandKeypad>
              <OperandKeypad btnStyle="keypad-operand-btn-large">=</OperandKeypad>
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
