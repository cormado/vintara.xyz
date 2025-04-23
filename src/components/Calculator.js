import React, { useState } from 'react';
import '../styles/Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setFormula(formula + digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
      setFormula(formula === '0' ? String(digit) : formula + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setFormula(formula + '0.');
      setWaitingForOperand(false);
      return;
    }

    if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setFormula(formula + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFormula('');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
    
    // Actualizar la fórmula para reflejar el cambio de signo
    if (formula.startsWith('-')) {
      setFormula(formula.substring(1));
    } else {
      // Manejo más complejo cuando hay una expresión
      const lastOperatorIndex = Math.max(
        formula.lastIndexOf('+'),
        formula.lastIndexOf('-'),
        formula.lastIndexOf('*'),
        formula.lastIndexOf('/')
      );
      
      if (lastOperatorIndex === -1) {
        setFormula('-' + formula);
      } else if (formula.charAt(lastOperatorIndex) === '+') {
        setFormula(formula.substring(0, lastOperatorIndex) + '-' + formula.substring(lastOperatorIndex + 1));
      } else if (formula.charAt(lastOperatorIndex) === '-') {
        setFormula(formula.substring(0, lastOperatorIndex) + '+' + formula.substring(lastOperatorIndex + 1));
      } else {
        const beforeOperator = formula.substring(0, lastOperatorIndex + 1);
        const afterOperator = formula.substring(lastOperatorIndex + 1);
        if (afterOperator.startsWith('-')) {
          setFormula(beforeOperator + afterOperator.substring(1));
        } else {
          setFormula(beforeOperator + '-' + afterOperator);
        }
      }
    }
  };

  const inputPercent = () => {
    const currentValue = parseFloat(display);
    const newValue = currentValue / 100;
    setDisplay(String(newValue));
    
    // Actualizar fórmula para reflejar el porcentaje
    const lastOperatorIndex = Math.max(
      formula.lastIndexOf('+'),
      formula.lastIndexOf('-'),
      formula.lastIndexOf('*'),
      formula.lastIndexOf('/')
    );
    
    if (lastOperatorIndex === -1) {
      setFormula(newValue.toString());
    } else {
      const beforeOperator = formula.substring(0, lastOperatorIndex + 1);
      setFormula(beforeOperator + newValue.toString());
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (nextOperator === '=') {
      // En caso de igual, evaluamos la expresión completa
      try {
        // eslint-disable-next-line no-eval
        const result = eval(formula);
        setDisplay(String(result));
        setFormula(formula + '=' + result);
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
      } catch (e) {
        setDisplay('Error');
        setFormula('Error');
      }
      return;
    }

    // Para otros operadores, los añadimos a la fórmula
    setFormula(formula + nextOperator);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue;
      let newValue;

      switch (operator) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  return (
    <div className="calculator">
      <div className="calculator-formula">{formula}</div>
      <div className="calculator-display">{display}</div>
      <div className="calculator-keypad">
        <div className="calculator-row">
          <button className="calculator-key key-clear" onClick={clearDisplay}>C</button>
          <button className="calculator-key key-sign" onClick={toggleSign}>±</button>
          <button className="calculator-key key-percent" onClick={inputPercent}>%</button>
          <button className="calculator-key key-operator" onClick={() => performOperation('/')}>/</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-key key-digit" onClick={() => inputDigit(7)}>7</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(8)}>8</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(9)}>9</button>
          <button className="calculator-key key-operator" onClick={() => performOperation('*')}>×</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-key key-digit" onClick={() => inputDigit(4)}>4</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(5)}>5</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(6)}>6</button>
          <button className="calculator-key key-operator" onClick={() => performOperation('-')}>−</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-key key-digit" onClick={() => inputDigit(1)}>1</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(2)}>2</button>
          <button className="calculator-key key-digit" onClick={() => inputDigit(3)}>3</button>
          <button className="calculator-key key-operator" onClick={() => performOperation('+')}>+</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-key key-digit key-zero" onClick={() => inputDigit(0)}>0</button>
          <button className="calculator-key key-decimal" onClick={inputDecimal}>.</button>
          <button className="calculator-key key-equals" onClick={() => performOperation('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;