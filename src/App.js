import React from 'react';
//import './App.css';
import Calculator from './components/Calculator.jsx';
import './components/Calculator.css';
import './components/Input.js';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        text: "",
        changed: false
      }
    }

    handleChange(event) {
      this.setState({
        text: event.target.value,
        changed: event.target.value.length > 0
      });
    }

    

    render() {
      return (
        <div className='main'>
          

          <Calculator />
        </div>
      )
    }
}


export default App;
