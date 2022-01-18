import React, { useEffect, useState } from "react";

import { Button } from "../Button";
import { Display } from "../Display";

import './styles.css';

export function Calculator() {

  const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
  }

  const [state, setState] = useState({})
  useEffect(() => {
    setState(initialState)
  }, [])

  function clearMemory() {
    setState({...initialState})
  }

  function setOperation(operation) {
    if(state.current === 0) {
      setState({...state, operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const currentOperation = state.operation

      const values = [...state.values]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch(e) {
        values[0] = state.values[0]
      }
      values[1] = 0

      setState({
        ...state,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  function addDigit(n) {
    if(n === '.' && state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = state.displayValue === '0' || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + n
    setState({displayValue, clearDisplay: false})

    if(n !== '.') {
      const i = state.current
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[i] = newValue
      setState({...state,  values})
    }
  }

  return (
  <div className="calculator">
      <Display value={state.displayValue}/>
      <Button label="AC" click={clearMemory} triple/>
      <Button label="/" click={setOperation} operation/>
      <Button label="7" click={addDigit}/>
      <Button label="8" click={addDigit}/>
      <Button label="9" click={addDigit}/>
      <Button label="*" click={setOperation} operation/>
      <Button label="4" click={addDigit}/>
      <Button label="5" click={addDigit}/>
      <Button label="6" click={addDigit}/>
      <Button label="-" click={setOperation} operation/>
      <Button label="1" click={addDigit}/>
      <Button label="2" click={addDigit}/>
      <Button label="3" click={addDigit}/>
      <Button label="+" click={setOperation} operation/>
      <Button label="0" click={addDigit} double/>
      <Button label="." click={addDigit}/>
      <Button label="=" click={setOperation} operation/>
    </div>
  );
}