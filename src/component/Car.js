import React, {Component} from "react";

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mystate: ''
        }
    }
    onChageState = (event) => {
        this.setState({mystate: event.target.value})
    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" onChange={this.onChageState}/>
                    <p>{this.state.mystate}</p>
                </form>
            </div>
        );
    }
}
export default Car;