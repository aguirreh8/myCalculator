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
	const numButtons = [];

	for (let i = 1; i < 10; i++) {
		numButtons.push(<NumberKeypad value={i} handleDisplayInput={this.handleDisplayInput}>{i}</NumberKeypad>)
	}
	
    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue={this.state.currentValue} />
          <div className="keypad-layout">
            <div className="keypad-numBtn-layout">
				{numButtons}
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
