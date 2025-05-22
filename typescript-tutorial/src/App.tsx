import React from 'react';
import './App.css';
import InputFeild from './components/inputFeild'; 

// let name: string = 'world';
// let age: number | string = 18;
// let isStudent: boolean = true;
// let hobbies: string[] = ['reading', 'gaming', 'coding'];

// type Person = { name: string; age?: number }
// let person: Person = { name: 'John', age: 30 };

// let allPersons: Person[] ;

// function printname(name: string) {
//   console.log(name);
// }

// printname("Sanjiv");

const App: React.FC = () => {
  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild/>
    </div>
  )
}
export default App;
