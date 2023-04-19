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
  // ^^ arrays with labels and content as keys/value so we can use them to call what we want displayed or iterated through

  const [tabArrays, setTabArrays] = useState(tabArray);
// adding the array to our State
  const [index, setIndex] = useState(0)
// adding a funtion to set index of state to 0
  return (
    <div className="App">
      <div>
        <Tabs tabArrays={ tabArrays } index={ index } setIndex={ setIndex }/>
        {/* this is using props defined in the Tabs file to display the information we need  */}
      </div>
      <DisplayTab tabArrays={ tabArrays } index={ index } />
    </div>
  );
}

export default App;
