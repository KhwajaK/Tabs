import React, {useState} from 'react';
import Tabs from './components/Tabs';
import DisplayTab from './components/DisplayTab';
import './App.css';

function App() {
  const tabArray=[
    { label: "Tab One", content: "fish, lizard, koala, bear"},
    {label: "Tab Two", content: "2, 4, 6, 8, 10, 12"},
    {label: "Tab Three", content: "Jared, Alex, Khrista, Tony, Nandor"}
  ];
  // ^^ arrays with labels 

  const [tabArrays, setTabArrays] = useState(tabArray);
  const [index, setIndex] = useState(0)
  return (
    <div className="App">
      <div>
        <Tabs tabArrays={ tabArrays } index={ index } setIndex={ setIndex }/>
      </div>
      <DisplayTab tabArrays={ tabArrays } index={ index } />
    </div>
  );
}

export default App;
