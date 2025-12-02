import React, {useState} from 'react'

const Hook = () => {

    // usestate - let [ variable , function ] = useState(initialValue)
        let [count , setCount] = useState(0)
        let inc = () => {
          setCount(count + 1)
        }
        let dec = () => {
          setCount(count - 1)
        }
        let reset = () => {
          setCount(0)
        }

  return (
    <>
      {/*
       Hook function ====================================
       useState - state management in functional components
       change state value
       UI update based on state change
       React re-rendering
      */}
        
        <h1>Count : {count} </h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      
    
      
    </>
  )
}

export default Hook
