import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Stateless(props) {
//   return (
//     <div>
//     </div>
//   );
// }

// const Stateless = props => {
//   return (
//     <div>
//     </div>
//   );
// }

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {  
    return (
      <div>
        <h1>JavaScript Calculator</h1>
      </div>
    );
  }
}
  
// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);