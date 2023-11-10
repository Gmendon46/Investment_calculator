import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';

function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue
        }
    })
  }

  const inputisValid = userInput.duration >= 1

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputisValid && <p className='center'>Please Enter a duration greater than 0</p>}
    {inputisValid && <Results input={userInput} />}
    </>
    
  );
}

export default App;
