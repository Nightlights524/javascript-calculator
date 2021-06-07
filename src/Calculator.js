import * as React from "react"
import * as styles from "./Calculator.module.css"

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
      // switch on key codes
    }
  }

  handleNumbers(event) {
    let currentFormula = this.state.formula;

    // if(formulaEvaluated(currentFormula)) {
    //   // currentFormula = "";
    //   // currentValue = "";
    // }
    
    // Special case, eliminate leading zeros for multi-digit numbers
    if (this.state.currentValue === '0' && 
        !endsWithOperator(this.state.formula)) {
      currentFormula = currentFormula.slice(0, -1);
    }

    this.setState({formula: currentFormula + event.target.value});

    if (this.state.currentValue === '0' ||
        endsWithOperator(this.state.formula)) {
      this.setState({currentValue: event.target.value});
    } else {
      const newValue = this.state.currentValue + event.target.value;
      this.setState({
        currentValue: newValue
      });
    }
  }
  
  handleOperators(event) {
    const lastChar = this.state.formula[this.state.formula.length-1];
    let currentFormula = this.state.formula;

    if (endsWithOperator(this.state.formula)) {
      if (event.target.value !== "-") {
        while (endsWithOperator(currentFormula)) {
          currentFormula = currentFormula.slice(0, -1);
        }
      } else if (lastChar === "-") {
          return;
      }
    }
    
    if (currentFormula === "") {
      currentFormula += "0";
    }

    currentFormula += event.target.value;
    this.setState({formula: currentFormula});
  }

  handleEquals(event) {
    let formula = this.state.formula;

    if (endsWithOperator(formula))
    {
      formula = formula.slice(0, -1);
    }

    let answer = Math.round(1000000000000 * eval(formula)) / 1000000000000;

    answer = answer.toString();

    this.setState(state => ({
      previousValue: state.currentValue,
      currentValue: answer,
      formula: answer
    }));
  }

  handleDecimal(event) {
    const testRegex = /\./;
    if (!testRegex.test(this.state.currentValue)) {
      let newValue = this.state.currentValue;
      let currentFormula = this.state.formula;

      if (endsWithOperator(this.state.formula) ||
          this.state.formula === "") {
        newValue = "0";
        currentFormula += "0";
      }

      this.setState({
        currentValue: newValue + event.target.value,
        formula: currentFormula + event.target.value
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
      <div className={styles.container}>
        <div className={styles.calculator}>
          <div className={styles.formulaDisplay}>
            {this.state.formula}
          </div>
          <div className={styles.display}>
            {this.state.currentValue}
          </div>
          <div className={styles.buttonArea}>
            <button value="AC" className={`${styles.button} ${styles.clear}`} onClick={this.handleClear}>AC</button>
            <button value="/"  className={styles.button} onClick={this.handleOperators}>/</button>
            <button value="*"  className={styles.button} onClick={this.handleOperators}>x</button>
            <button value="7"  className={styles.button} onClick={this.handleNumbers}>7</button>
            <button value="8"  className={styles.button} onClick={this.handleNumbers}>8</button>
            <button value="9"  className={styles.button} onClick={this.handleNumbers}>9</button>
            <button value="-"  className={styles.button} onClick={this.handleOperators}>-</button>
            <button value="4"  className={styles.button} onClick={this.handleNumbers}>4</button>
            <button value="5"  className={styles.button} onClick={this.handleNumbers}>5</button>
            <button value="6"  className={styles.button} onClick={this.handleNumbers}>6</button>
            <button value="+"  className={styles.button} onClick={this.handleOperators}>+</button>
            <button value="1"  className={styles.button} onClick={this.handleNumbers}>1</button>
            <button value="2"  className={styles.button} onClick={this.handleNumbers}>2</button>
            <button value="3"  className={styles.button} onClick={this.handleNumbers}>3</button>
            <button value="="  className={`${styles.button} ${styles.equals} ${styles.roundedBottomRight}`} onClick={this.handleEquals}>=</button>
            <button value="0"  className={`${styles.button} ${styles.zero} ${styles.roundedBottomLeft}`} onClick={this.handleNumbers}>0</button>
            <button value="."  className={styles.button} onClick={this.handleDecimal}>.</button>
          </div>
        </div>
      </div>
    );
  }
}

function endsWithOperator(string) {
  const char = string[string.length-1];
  return char === "+" ||
         char === "-" ||
         char === "*" ||
         char === "/";
}

// function formulaEvaluated (formula) {
//   const regex = /=/;
//   return regex.test(formula);
// }

export default Calculator