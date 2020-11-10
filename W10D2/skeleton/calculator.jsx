import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
    }

    // your code here
    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({num1});
    }


    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num2 });
    }

    add(e) {
        const result = this.state.num1 + this.state.num2
        this.setState({result})
    }

    subtract(e) {
        const result = this.state.num1 - this.state.num2
        this.setState({ result })
    }

    multiply(e) {
        const result = this.state.num1 * this.state.num2
        this.setState({ result })
    }

    divide(e) {
        const result = this.state.num1 / this.state.num2
        this.setState({ result })
    }

    clear(e) {
        const num1 = "";
        const num2 = "";
        const result = 0;
        this.setState({num1, num2, result})
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input type="text" value={this.state.num1} onChange={this.setNum1}/>
                <input type="text" value={this.state.num2} onChange={this.setNum2} />
                <button onClick={this.clear}>Clear</button>
                <br/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        );
    }
}

export default Calculator;