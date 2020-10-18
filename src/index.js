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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    switch(event.target.value) {

    }
  }
  
  render() {  
    return (
      <div id="container">
        <div id="calculator">
          <div id="display">
            {this.state.display}
          </div>
          <button value="AC" id="clear">AC</button>
          <button value="/"  id="divide">/</button>
          <button value="x"  id="multiply">x</button>
          <button value="7"  id="seven">7</button>
          <button value="8"  id="eight">8</button>
          <button value="9"  id="nine">9</button>
          <button value="-"  id="subtract">-</button>
          <button value="4"  id="four">4</button>
          <button value="5"  id="five">5</button>
          <button value="6"  id="six">6</button>
          <button value="+"  id="add">+</button>
          <button value="1"  id="one">1</button>
          <button value="2"  id="two">2</button>
          <button value="3"  id="three">3</button>
          <button value="="  id="equals">=</button>
          <button value="0"  id="zero">0</button>
          <button value="."  id="decimal">.</button>
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