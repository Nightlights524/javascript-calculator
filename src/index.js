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
      display: 0
    }
  }
  
  render() {  
    return (
      <div id="container">
        <div id="calculator">
          <div id="display">
            {this.state.display}
          </div>
          <button id="clear">AC</button>
          <button id="divide">/</button>
          <button id="multiply">x</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="subtract">-</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="add">+</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="equals">=</button>
          <button id="zero">0</button>
          <button id="decimal">.</button>
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