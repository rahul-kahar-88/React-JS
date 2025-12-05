import React, {useState} from 'react'

const Hook2 = () => {
       let [name, setName] = useState(" ")
       let inputchange = (e) => {
        //   console.log(e);   // event object
        //   console.log(e.target);   // which element 
        //     console.log(e.target.value);   // value of the element
         setName(e.target.value)
       }
         let [city, setCity] = useState(" ")
            let intercity = (e) => {    
                setCity(e.target.value) 
            }

  return (
    <>
    <h1>Hooks</h1>
    Enter name : <input type="text" onChange={inputchange} />
    <br />
    Your name is : {name} 
    <br />
    Enter city : <input type="text" onChange={intercity} />
    <br />
    Your city is : {city}
      
    </>
  )
}

export default Hook2
