import React from 'react'
import Child from './Child'

let App = () => {

    // let name = "rk"
    // let age = 20

    let myinfo={
        name:"rahul",
        age:20,
        city:gkp
    }
  return (
    <>
      <h1>Home page</h1>
      {/* <Child  myname="rahul" age="20"/> */}
      {/* <Child myname={name} age={age}/>
      <Child myname="shiva" age={23}/> */}
      <Child mydata={myinfo}/>
      
    </>
  )
}

export default App
