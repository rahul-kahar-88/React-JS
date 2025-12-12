import React, { useEffect, useState } from 'react'

const App = () => {

    let [count,setcount]= useState(0)

    let Inc=()=> {
        setcount(count+1)
    }

    useEffect( ()=> {
          console.log("Running.....");
          
    } , [] )           //  [] --- dependency array  keval ek bar dikhane ke liye 
  return (
    <>
      <button onClick={Inc}>Increment</button>
      Count : {count}
    </>
  )
}

export default App
