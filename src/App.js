import React from 'react';
import './components/Calculator.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      changed: false
    };
  }

  handleButtonClick = (num) => {
    this.setState((prevState) => ({
      text: prevState.text + num,
      changed: true
    }));
  }

  handleCleanClick = () => {
    this.setState({
      text: "",
      changed: false
    });
  }

  handleCalculateClick = () => {
    const { text } = this.state;

    if (text) {
      try {
        const result = eval(text); 
        this.setState({
          text: result,
          changed: true
        });
      } catch (error) {
        console.error("Erro ao calcular:", error);
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value,
      changed: false
    });
  }

  

  render() {
    const { text, changed } = this.state;

    return (
      
      <div className="calc">

        <div>
        <h1>Calculator - React</h1>
        <div className='numbers'>

          <div className='resultado'>
            {changed && <p>{text}</p>}
            <input type="text" value={text} 
            onChange={this.handleInputChange} />
              <button className='ac' onClick={() => this.handleCleanClick()}>AC</button>
          </div>



            <button onClick={() => this.handleButtonClick(7)}>7</button>
            <button onClick={() => this.handleButtonClick(8)}>8</button>
            <button onClick={() => this.handleButtonClick(9)}>9</button>
            <button className='orange' onClick={() => this.handleButtonClick("*")}>X</button>
            

            <button onClick={() => this.handleButtonClick(4)}>4</button>
            <button onClick={() => this.handleButtonClick(5)}>5</button>
            <button onClick={() => this.handleButtonClick(6)}>6</button>
            <button className='orange' onClick={() => this.handleButtonClick("+")}>+</button>

            <button onClick={() => this.handleButtonClick(1)}>1</button>
            <button onClick={() => this.handleButtonClick(2)}>2</button>
            <button onClick={() => this.handleButtonClick(3)}>3</button>
            <button className='orange' onClick={() => this.handleButtonClick("-")}>-</button>
            <button onClick={() => this.handleButtonClick(0)}>0</button>

            <button onClick={() => this.handleButtonClick(",")}>,</button>
            <button className='orange' onClick={() => this.handleButtonClick("/")}>/</button>
            <button className='orange' onClick={() => this.handleCalculateClick()}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
