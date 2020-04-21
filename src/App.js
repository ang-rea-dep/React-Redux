import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./component/Car";

class App extends Component {
    render(){
        const carinfo = {
            carname: "Ford",
            cartype: "xx"
        }
        return (
            <div className="App">
                <Car brand={carinfo} type={carinfo.cartype}/>
            </div>
        );
    }
}

export default App;
