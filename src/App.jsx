import React, {Component} from 'react';
import Header from './components/Header';
import Main from "./components/Main";
import Display from "./components/Display";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                    <Main>
                        <p>Main</p>
                        <Display currentValue="123345"/>
                    </Main>
            </div>
        )
    };
}

export default App;
