
//Container
import { Container, Display, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState()

  const handleANumber = (num)=>{
    setCurrentNumber(prev=> `${prev === '0' ? '' : prev}${num}`)
  }

  const clearNumber = ()=>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation()
  }

  const handleSumNumber = ()=>{
    if(firstNumber === "0"){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }else{
      let sum = Number(firstNumber)+Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumber = ()=>{
    if(firstNumber === "0"){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    }else{
      let sub = Number(firstNumber)-Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleMultNumber = ()=>{
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    }else{
      let mult = Number(firstNumber)*Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const handleDivNumber = ()=>{
    if(firstNumber==='0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    }else{
      let div = Number(firstNumber)/Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleEqual = ()=>{
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default:
          break
      }

    }
  }

  return (
    <Container>
      <Display>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={()=>handleMultNumber()}/>
          <Button label="/" onClick={()=>handleDivNumber()}/>
          <Button label="C" onClick={()=>clearNumber()}/>
          <Button label="-" onClick={()=>handleSubNumber()}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleANumber('7')}/>
          <Button label="8" onClick={()=>handleANumber('8')}/>
          <Button label="9" onClick={()=>handleANumber('9')}/>
          <Button label="+" onClick={()=>handleSumNumber()} />
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleANumber('4')}/>
          <Button label="5" onClick={()=>handleANumber('5')}/>
          <Button label="6" onClick={()=>handleANumber('6')}/>
          <Button label="=" onClick={()=>handleEqual()}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleANumber('1')}/>
          <Button label="2" onClick={()=>handleANumber('2')}/>
          <Button label="3" onClick={()=>handleANumber('3')}/>
          <Button label="0" onClick={()=>handleANumber('0')}/>
        </Row>
      </Display>
    </Container>
  );
}

export default App;
