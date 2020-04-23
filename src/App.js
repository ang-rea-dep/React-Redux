import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter.jsx";
import CounterList from "./component/CounterList"

class App extends Component {
    render(){
        const carinfo = {
            carname: "Ford",
            cartype: "xx"
        }
        return (
            <div className="App">
                <CounterList/>
            </div>
        );
    }
}

export default App;
