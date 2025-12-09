import React, { useState } from 'react'

const App = () => {

  let [form , setform] = useState({
    username: "",
    pass: ""

  })

  let loginChange = (e) => {
       setform({ ...form,   [e.target.name]: e.target.value})
  } 
  let login =  (e) => {
    e.preventDefault()
    let validate = true

    if (form.username.trim() == "" ) {
      alert("please fill username")
      validate = false
    }
    else if(form.pass.trim() == ""){
      validate = false
    }
  }


  return (
    <>
    <h1>login</h1>
     <form onSubmit={login}>
        Username : <input type="text" name='username' placeholder='enter username' value={form.username} onChange={loginChange} />  <br />  <br />
        Pass : <input type="text" name='pass' placeholder='enter pass' value={form.pass} onChange={loginChange} />   <br />     <br />
        <button type='submit'>Submit</button>
     </form>

      
    </>
  )
}

export default App

