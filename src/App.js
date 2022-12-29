import './app.css'
import {useState} from 'react'
import Header from './components/header';
import Counter from './Counter';
import Employee from './Employee';

function App() {
  // const data = 'Hi this is the new react project'
  // let counter = 0
  const [count,setCount] = useState(0)
  const [state, setState] = useState(false)
  const addCount = () => {
    setCount(count + 1)
    // console.log(counter);  
  }

  let obj = {
    title: 'Counter 1',
    count,
    place:'undapori'
  }

  let emp = [{
    name: 'Arfaq',
    age: 23,
    place: 'edkr'
  },
  {
    name: 'Safwan',
    age: 22,
    place: 'manjeri'
  },
  {
    name: 'Majr',
    age: 21,
    place: 'valancheri'
  },
]

  return (
    <div>
      <Header data={count}/>
      {/* <Hello/>
      <Hello/>
      <Hello/> */}
      <button onClick={addCount}>Add</button>
      <p style={{color: 'Blue', fontSize: '30px'}}>{count}</p>
      <Counter {...obj}/>
      <Counter {...obj}/>
      <h1 onClick={() => setState(!state)}>Show/Hide</h1>
      {state && <Counter {...obj}/> } 
      {
        //if there is something else other than to return the we need to write like this

        // emp.map((object, index)=>{
              //sample = 'null' etc......
        //   return (
        //     <Employee key={index} {...object} />
        //   )
        // })

        // we can also write like this if we only have to return something
        emp.map((object, index)=> (
            <Employee key={index} {...object} />
          )
        )
      }
      
    </div>
  );
}

export default App;

// function Hello() {
//   return (
//     <h1 className='main'>HELLOO WORLD</h1>
//   )
// }

