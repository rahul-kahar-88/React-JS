import axios from 'axios'
import React, {useState} from 'react'




const Form = ({fun}) => {
    // let [name, setName] = useState(" ")
    // let [email, setEmail] = useState(" ")


      


    let [form, setform] = useState({
        name: "",
        age: "",
        aadhar: "",
        city: "",
        checkin: "",
        checkout: "",
        people: ""
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
        else if (form.age.trim() == "") {
            alert("Please fill age")
            validate = false
        }   
        else if (form.aadhar.trim() == "") {
            alert("Please fill aadhar")
            validate = false
        }
 
      
        if (validate) {
 
            let api="http://localhost:3000/train"

            axios.post(api, {...form , person:500}).then((res)=> {
                alert("data submited")
                fun()
            })
            
        }
       
    }
  return (
    <>
       




    <h1>Form Handling</h1>
    <form  onSubmit={HandleSubmit} className='h-190.25  justify-center items-center'>
        Name   :    <input type="text" name="name" placeholder='enter name' value={form.name} onChange={handleChange} /> <br />  <br />
        Age   :    <input type="number" name="age" placeholder='enter age' value={form.age} onChange={handleChange} /> <br />   <br />
        Aadhar   :    <input type="number" name="aadhar" placeholder='enter aadhar' value={form.aadhar} onChange={handleChange} /> <br />   <br />

        select City : <select name="city" id="" value={form.city} onChange={handleChange}>
            <option value="Bhopal">Bhopal</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Gorakhpur">Gorakhpur</option>
            <option value="lucknow">lucknow</option>
            <option value="Deoria">Deoria</option>
            <option value="Singrauli">Singrauli</option>
            <option value="Rewa">Rewa</option>
        </select>  <br />  <br />

        Enter CheckIn : <input type="date" name='checkin'  value={form.checkin} onChange={handleChange}/>  <br />  <br />
        Enter Checkout : <input type="date" name='checkout'  value={form.checkout} onChange={handleChange}/>  <br />  <br />
        Enter People : <input type="number" name='people'  value={form.people} onChange={handleChange}/> <br />  <br />
       
        <button type="submit">Submit</button>
    </form>
    
    </>
  )

}

export default Form
