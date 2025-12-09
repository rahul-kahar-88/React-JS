import React from 'react'

const App = () => {
      
    // let MyData = ["rahul","shiva","tanamy","Ram","shyam"]


    // Array of object

     let Data=[
        {id:1, name:"rahul",  city:"gkp"},
        {id:2, name:"shiva",  city:"rewa"},
        {id:3, name:"tanmay",  city:"bpI"}
    ]


  return (
    <>
    <h1>Map</h1>

    {/* <ul>

        {MyData.map((e,i)=> (
        <li key={i}> {e} </li>    
        ))}

    </ul> */}

     { Data.map((e)=> (
    <div key={e.id}>
       
        <h1>{e.name}</h1>   
        <p>{e.city}</p>

    </div>

     ))}

    </>
  )
}

export default App
