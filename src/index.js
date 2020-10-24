import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// const Stateless = props => {
  //   return (
    //     <div>
    //     </div>
    //   );
    // }
    
// function CalculatorButton(props) {
//   return (
//     <button>
//       {props.value}
//     </button>
//   );
// }

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      currentValue: '0',
      previousValue: '0',
      operator: null
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleKeyPress(event) {
    switch(event.target.value) {

    }
  }

  handleNumbers(event) {
    if (this.state.currentValue === '0') {
      this.setState({currentValue: event.target.value});
    } else {
      const newValue = this.state.currentValue + event.target.value;
      this.setState({currentValue: newValue});
    }
  }

  handleOperators(event) {
    this.setState({
      operator: event.target.value});
  }

  handleEquals(event) {
    const previous = parseFloat(this.state.previousValue);
    const current = parseFloat(this.state.currentValue);
    let evaluated;

    switch(this.state.operator) {
      case '+':
        evaluated = previous + current;
        break;
      case '-':
        evaluated = previous + current;
        break;
      case 'x':
        evaluated = previous * current;
        break;
      case '/':
        evaluated = previous / current;
        break;
      default:
        alert("ERROR: null operator");
    }

    const display = evaluated.

    this.setState(state => ({
      previousValue: state.currentValue,
      currentValue: display
    }));
  }

  handleDecimal(event) {
    const testRegex = /\./;
    if (!testRegex.test(this.state.currentValue)) {
      const newValue = this.state.currentValue + event.target.value;
      this.setState({currentValue: newValue});
    }
  }

  handleClear(event) {
    this.setState({
      formula: "",
      currentValue: '0',
      previousValue: '0',
      operator: null
    });
  }
  
  render() {  
    return (
      <div id="container">
        <div id="calculator">
          <div id="display">
            {this.state.currentValue}
          </div>
          <button value="AC" id="clear" onClick={this.handleClear}>AC</button>
          <button value="/"  id="divide" onClick={this.handleOperators}>/</button>
          <button value="x"  id="multiply" onClick={this.handleOperators}>x</button>
          <button value="7"  id="seven" onClick={this.handleNumbers}>7</button>
          <button value="8"  id="eight" onClick={this.handleNumbers}>8</button>
          <button value="9"  id="nine" onClick={this.handleNumbers}>9</button>
          <button value="-"  id="subtract" onClick={this.handleOperators}>-</button>
          <button value="4"  id="four" onClick={this.handleNumbers}>4</button>
          <button value="5"  id="five" onClick={this.handleNumbers}>5</button>
          <button value="6"  id="six" onClick={this.handleNumbers}>6</button>
          <button value="+"  id="add" onClick={this.handleOperators}>+</button>
          <button value="1"  id="one" onClick={this.handleNumbers}>1</button>
          <button value="2"  id="two" onClick={this.handleNumbers}>2</button>
          <button value="3"  id="three" onClick={this.handleNumbers}>3</button>
          <button value="="  id="equals" onClick={this.handleOperators}>=</button>
          <button value="0"  id="zero" onClick={this.handleNumbers}>0</button>
          <button value="."  id="decimal" onClick={this.handleDecimal}>.</button>
        </div>
      </div>
    );
  }
}
  
// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);