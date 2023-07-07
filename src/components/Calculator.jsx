import React, {useState} from "react";
import './Calculator.css';




class Calculator extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        num: 0,
        changed: false
    };
}

handleChange(event) {
    this.setState({
        text:"",
    });
}

    inputNum(e) {
    e.preventDefault();
    var input = e.target.value;
    if (this.state.num === 0) {
        this.setState({ num: input });
    } else {
        this.setState((prevState) => ({ num: prevState.num + input }));
    }
}

    clear() {
    var zero = "0";
    this.setState({ num: zero });
    }

    porcentage() {
    this.setState((prevState) => ({ 
        num: prevState.num / 100 
    })
    );
    }

    alterador() {
    if (this.state.num > 0) {
        this.setState((prevState) => ({ 
            num: -prevState.num 
        })
        );
    } else {
        this.setState((prevState) => ({ 
            num: Math.abs(prevState.num)
        })
        );
    }
}

    render() {
    return (
        <div>
        <h1>Calculator - React</h1>

        <div className='numbers'>
        {this.state.changed && (
            <p>{this.state.text}</p>
        )}
        
        <input onChange={this.handleChange.bind(this)}/>


            <h1 onChange={this.handleChange.bind(this)} className='resultado' ></h1>
            <button onClick={this.clear.bind(this)}>AC</button>
            <button onClick={this.alterador.bind(this)}>+/-</button>
            <button onClick={this.porcentage.bind(this)}>%</button>
            <button className="orange">/</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={7}>7</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={8}>8</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={9}>9</button>
            <button className="orange">X</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={4}>4</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={5}>5</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={6}>6</button>
            <button className="orange">-</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={1}>1</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={2}>2</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={3}>3</button>
            <button className="orange">+</button>
            <button className="gray" onClick={this.inputNum.bind(this)} value={0}>0</button>
            <button onClick={this.inputNum.bind(this)} value={","}>,</button>
            <button className="igual">=</button>
        </div>
        </div>
    );
    }
}

export default Calculator;





