import React, {Component} from "react";

class Car extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            type: "50x"
        };
    }
    ChangeType(){
        this.setState({brand: "xxFord"});
    }
    render(){
        return (
            <>
                <h1>Hello World</h1>
                <p>{this.state.brand}</p>
                <p>{this.state.type}</p>
                <button type="button" onClick={() => this.ChangeType()}>button</button>
            </>
        );
    }
}
export default Car;