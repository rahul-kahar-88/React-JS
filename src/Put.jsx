import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Put = () => {

     let [form, setform] = useState({
            name: "",
            age: "",
            aadhar: "",
            city: "",
            checkin: "",
            checkout: "",
            people: ""
        })

   let[Data,setData]= useState([])
   let[editId,seteditId]= useState(null)
   let[search,setsearch]= useState("")


   let FatchData=() => {

       //     Get Method -- 
      // -------------------- //
    let api="http://localhost:3000/train"

    axios.get(api).then( (res) => {
       console.log(res.data);
       setData(res.data)
    } ).catch((err)=> {
        console.log("error" , err);
        
    })
   }
      
   useEffect(() => {
    FatchData()
   } , [])
   
    //     Delete Method -- 
    // -------------------- //
    let DataDelete=(id)=>{
    let api=`http://localhost:3000/train/${id}`
    axios.delete(api).then(()=>{
      alert("booking cancelled")
      FatchData()

    })
    }

    let handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value})
    }

    let HandleSubmit = (e) => {
        e.preventDefault()
     let api=`http://localhost:3000/train/${editId}`

     axios.put(api , {...form , person:500 }).then(()=> {
      FatchData()
      seteditId(null)
     })
    }

    let FilterData = Data.filter((e) => {
      return ( e.name.toLowerCase().includes(search.toLowerCase())
      || e.age.toString().includes(search.toString())
    )
    })

    let formopen = (e) => {

      seteditId(e.id)

      setform(  {name: e.name , age: e.age , aadhar:e.aadhar , city:e.city ,
              checkin:e.checkin , checkout:e.checkout , people: e.people
      } )
    }

  return (
    <>
      <h1>Data show</h1>
      Search : <input type="text" value={search} onChange={(e)=> {setsearch(e.target.value)} } />   <br />   <br />  
      <table border={1} cellPadding={7}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Aadharno</th>
            <th>City</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>People</th>
            <th>Total</th>
            <th>Cancel</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          { FilterData.map((e)=>(
            <tr>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.aadhar}</td>
              <td>{e.city}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.people}</td>
              <td>{e.person*e.people}</td>
              <td onClick={ ()=>{ DataDelete(e.id) } }>Delete</td>
              <td onClick={ ()=>{ formopen(e) } }>Edit</td>
            </tr>
           
          ))}
        </tbody>
      </table> <br />  <br />

      {

        editId && (

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



        )
      }
    </>
  )
}

export default Put
