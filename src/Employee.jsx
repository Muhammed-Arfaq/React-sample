import React from 'react'

function Employee({name, age, place}) {
  return (
    <div>
        <br />
        Employee Details: 
        <br />
        <br />
        {name},
        {age}, 
        {place}
    </div>
  )
}

export default Employee