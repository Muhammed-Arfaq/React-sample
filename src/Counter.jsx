import React from 'react'
import { useState, useEffect } from 'react'

// function Counter(props) {
//     const {title, count} = props  
//   return (
//     <div className='main'>{ title }:  { count }</div>
//   )
// }

// props is not needed, instead we can write like this
function Counter({title, ...obj}) {
  const [count, setCount] = useState(0)
  useEffect (()=>{
    console.log('mounting');
    return() => {
      console.log('unmounting');
    }
  })
  return (
    <div className='main'>
      <button onClick={() =>setCount(count + 1)}>Increment</button>
      { title }:  { count }</div>
  )
}

export default Counter