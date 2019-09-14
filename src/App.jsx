import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";

class App extends Component {
	state = {
		currentValue: "0"
	}

	handleDisplayInput = (input) => {
		this.setState({
			currentValue: this.state.currentValue + input
		})
	}

  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Display currentValue={this.state.currentValue} />
          <div className="keypad-layout">
            <div className="keypad-numBtn-layout">
				<div className="keypad-number-btn" >
					1
				</div>
				<div className="keypad-number-btn">
					2
				</div>
				<div className="keypad-number-btn">
					3
				</div>
				<div className="keypad-number-btn">
					4
				</div>
			</div>
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
