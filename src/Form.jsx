import React, {useState} from 'react'

const App = () => {
    // let [name, setName] = useState(" ")
    // let [email, setEmail] = useState(" ")
      
    let [form, setform] = useState({
        name: "",
        email: "",
        number: ""
    })

    let handleChange = (e) => {
        setform({ ...form,   [e.target.name]: e.target.value})
    }
    let HandleSubmit = (e) => {
        e.preventDefault()
        if (form.name.trim() == "") {
            alert("Please fill name")
        }
        else if (form.email.trim() == "") {
            alert("Please fill email")
        }   
        else if (form.number.trim().length !== 10) {
            alert("Please fill number")
        }
        console.log(form)
        
    }

  return (
    <>
    <h1>Form Handling</h1>
    <form  onSubmit={HandleSubmit}>
        Name    :    <input type="text" name="name" placeholder='enter name' value={form.name} onChange={handleChange} /> <br />  <br />
        Email    :    <input type="email" name="email" placeholder='enter email' value={form.email} onChange={handleChange} /> <br />   <br />
        Number   :    <input type="number" name="number" placeholder='enter number' value={form.number} onChange={handleChange} /> <br />   <br />
        <button type="submit">Submit</button>
    </form>
      
    </>
  )

}

export default App
