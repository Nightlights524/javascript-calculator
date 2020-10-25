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
    if (this.state.currentValue === '0' ||
        endsWithOperator(this.state.formula)) {
      this.setState({currentValue: event.target.value});
    } else {
      const newValue = this.state.currentValue + event.target.value;
      this.setState({
        currentValue: newValue
      });
    }
    
    const currentFormula = this.state.formula + event.target.value;
    this.setState({formula: currentFormula});
  }
  
  handleOperators(event) {
    const char = this.state.formula[this.state.formula.length-1];
    const entry = event.target.value;
    let currentFormula = this.state.formula;

    if (endsWithOperator(this.state.formula)) {
      // Replace last character in formula
      currentFormula = currentFormula.replace(/.$/, event.target.value);
    } else {
      // Otherwise add operator to the formula
      currentFormula += event.target.value;
    }
    
    this.setState({formula: currentFormula});
  }

  handleEquals(event) {
    let answer = eval(this.state.formula);

    this.setState(state => ({
      previousValue: state.currentValue,
      currentValue: answer,
      formula: answer.toString()
    }));
  }

  handleDecimal(event) {
    const testRegex = /\./;
    if (!testRegex.test(this.state.currentValue)) {
      const newValue = this.state.currentValue + event.target.value;
      const currentFormula = this.state.formula + event.target.value;
      this.setState({
        currentValue: newValue,
        formula: currentFormula
      });
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
          <div id="formula-display">
            {this.state.formula}
          </div>
          <div id="display">
            {this.state.currentValue}
          </div>
          <button value="AC" id="clear" onClick={this.handleClear}>AC</button>
          <button value="/"  id="divide" onClick={this.handleOperators}>/</button>
          <button value="*"  id="multiply" onClick={this.handleOperators}>x</button>
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
          <button value="="  id="equals" onClick={this.handleEquals}>=</button>
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

// ========================================

function endsWithOperator(string) {
  const char = string[string.length-1];

  return char === "+" ||
         char === "-" ||
         char === "*" ||
         char === "/";
}