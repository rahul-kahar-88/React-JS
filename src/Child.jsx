import React from 'react'

// const Child = ({myname,age}) => {
const Child = ({props}) => {
  let {name,age,city} = mydata
// let props = {
//       myname:"rahul",
//       age:20
// }
// let {myname,age} = props

// myname

    
  return (
    <>
      {/* <h1>hey Child</h1>
      <p>my name is  {myname}  </p>
      <p>my age is  {age}</p> */}
      
      <p>my name is {name}</p>
      <p>my age is {age}</p>
      <p>i am from {city}</p>
     

    </>
  )
}

export default Child
