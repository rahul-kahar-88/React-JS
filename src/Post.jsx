import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from './Form'

const Post = () => {
     
   let[Data,setData]= useState([])

    //     Post Method -- 
    // -------------------- //


    let FatchData=()=>{
         
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

    }

    useEffect(()=>{
       FatchData()
    } , [] )


  


    //     Delete Method -- 
    // -------------------- //


    let DataDelete=(id)=>{
    let api=`http://localhost:3000/train/${id}`
    axios.delete(api).then(()=>{
      alert("booking cancelled")
      FatchData()
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
            <th>Aadhar</th>
            <th>City</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>People</th>
            <th>Total</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          { Data.map((e)=>(
            <tr>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.aadhar}</td>
              <td>{e.city}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.people}</td>
              {/* <td>{e.Total}</td> */}
              <td>{e.people*e.person}</td>
              <td onClick={ ()=>{ DataDelete(e.id) } }>Delete</td>
            </tr>
           
          ))}
        </tbody>
      </table>

      <Form fun={FatchData}/>
    </>
  )
}

export default Post
