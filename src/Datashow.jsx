import axios from 'axios'
import React from 'react'

const Datashow = () => {
     
    let api="http://localhost:3000/train"

    axios.get(api).then( (res) => {
       console.log(res.data);
       
    } )
    .catch((err)=> {
        console.log("error" , err);
        
    } , [])


  return (
    <>
      <h1>Data show</h1>
    </>
  )
}

export default Datashow
