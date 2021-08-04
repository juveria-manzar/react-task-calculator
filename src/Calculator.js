import './Calculator.css';
import React from 'react';

import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {

  state = {
    input: "",
    output: ""
  }

  handleButton = (value) => {
    console.log(value)
    switch (value) {
      case '=': {
        if (this.state.input !== '') {
          let ans = '';
          try {
            ans = eval(this.state.input);
          }
          catch (err) {
            this.setState({ output: "Math Error" });
          }
          if (ans === undefined)
            this.setState({ output: "Math Error" });
          else
            this.setState({ input: ans, output: '' });
          break;
        }
      }
      case 'Clear': {
        this.setState({ output: '', input: '' })
        break;
      }
      default: {
        this.setState({ input: this.state.input += value })
      }
    }
  }

  render = () => {
    return (
      <div className="main">
        <Display input={this.state.input} output={this.state.output} />
        <hr></hr>
        <div className="button-row">
          <Button label={'Clear'} handleButton={this.handleButton} />
          <Button label={'Del'} handleButton={this.handleButton} />
          <Button label={'.'} handleButton={this.handleButton} />
          <Button label={'/'} handleButton={this.handleButton} />
        </div>
        <div className="button-row">
          <Button label={'7'} handleButton={this.handleButton} />
          <Button label={'8'} handleButton={this.handleButton} />
          <Button label={'9'} handleButton={this.handleButton} />
          <Button label={'*'} handleButton={this.handleButton} />
        </div>
        <div className="button-row">
          <Button label={'4'} handleButton={this.handleButton} />
          <Button label={'5'} handleButton={this.handleButton} />
          <Button label={'6'} handleButton={this.handleButton} />
          <Button label={'-'} handleButton={this.handleButton} />
        </div>
        <div className="button-row">
          <Button label={'1'} handleButton={this.handleButton} />
          <Button label={'2'} handleButton={this.handleButton} />
          <Button label={'3'} handleButton={this.handleButton} />
          <Button label={'+'} handleButton={this.handleButton} />
        </div>
        <div className="button-row">
          <Button label={'0'} handleButton={this.handleButton} />
          <Button label={'='} handleButton={this.handleButton} />
        </div>
      </div>
    )
  }
}

export default Calculator;
