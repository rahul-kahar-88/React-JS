import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Maincard from './Maincard'

const App = () => {
    // let [name, setName] = useState(" ")
    // let [email, setEmail] = useState(" ")

    let nav = useNavigate()
      


    let [form, setform] = useState({
        name: "",
        email: "",
        number: "",
        username: "",
        pass: "",
        cpass: ""
    })

    let handleChange = (e) => {
        setform({ ...form,   [e.target.name]: e.target.value})
    }
    let HandleSubmit = (e) => {
        e.preventDefault()
        
       
        let validate = true

        if (form.name.trim() == "") {
            alert("Please fill name")
            validate = false
        }
        else if (form.email.trim() == "") {
            alert("Please fill email")
            validate = false
        }   
        else if (form.number.trim().length !== 10) {
            alert("Please fill number")
            validate = false
        }
        else if (form.username.trim() == "") {
            alert("Please fill username")
            validate = false
        }
        else if (form.number.trim() == "") {
            alert("Please fill pass")
            validate = false
        }
        else if (form.number.trim() == "") {
            alert("Please fill cpass")
            validate = false
        }
        else{
          nav("/login1")
        }
        console.log(form)
        if (validate) {
            alert("Form submitted successfully")
            localStorage.setItem("name", form.name)
            localStorage.setItem("email", form.email)
            localStorage.setItem("number", form.number)
            localStorage.setItem("username", form.username)
            localStorage.setItem("pass", form.pass)
            localStorage.setItem("cpass", form.cpass)
            
            
        }
        
    }

    

    
    

  return (
    <div className='text-center justify-between h-196.25 '>
    <h1 className=' '>Form Handling</h1>
    <form  onSubmit={HandleSubmit} className=' border-4 w-150 h-150 text-center justify-between ml-175 mt-5 pt-30  '>
        Name   :    <input type="text" name="name" placeholder='enter name' value={form.name} onChange={handleChange} /> <br />  <br />
        Email   :    <input type="email" name="email" placeholder='enter email' value={form.email} onChange={handleChange} /> <br />   <br />
        Number   :    <input type="number" name="number" placeholder='enter number' value={form.number} onChange={handleChange} /> <br />   <br />
        Username  :    <input type="text" name="username" placeholder='enter username' value={form.username} onChange={handleChange} /> <br />   <br />
        pass  :    <input type="text" name="pass" placeholder='enter pass' value={form.pass} onChange={handleChange} /> <br />   <br />
        cpass  :    <input type="text" name="cpass" placeholder='enter cpass' value={form.cpass} onChange={handleChange} /> <br />   <br />
        <button type="submit">Submit</button>
    </form>
      
    </div>
  )

}

export default App
