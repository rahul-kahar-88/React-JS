import axios from 'axios'
import React, { useState } from 'react'

const Datashow = () => {
     
   let[Data,setData]= useState([])

      //     Get Method -- 
      // -------------------- //


    let api="http://localhost:3000/train"

    axios.get(api).then( (res) => {
       console.log(res.data);
       setData(res.data)
    } )
    .catch((err)=> {
        console.log("error" , err);
        
    } , [])

    let DataDelete=(id)=>{
    let api=`http://localhost:3000/train${id}`
    axios.delete(api).then(()=>{
      alert("booking cancelled")

    })
    }


  return (
    <>
      <h1>Data show</h1>
      <table border={1} cellPadding={2}>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { Data.map((e)=>(
            <tr>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.aadharno}</td>
              <td>{e.city}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.people}</td>
              <td>{e.Total}</td>
              <td onClick={ ()=>{ DataDelete(e.id) } }>Delete</td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Datashow
