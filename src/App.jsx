// import react from "react"
import Navbar from "./Navbar"
import { Footer,Footer2 } from "./Footer"
import Checknumber from "./Checknumber"
import {Shownumber, Shownumber1} from "./Shownumber"
import './App.css'
import Img from './assets/react.svg'


const App=()=>{
    // javascript will be written here
    
    let Rahul=()=>{
        let a = parseInt(prompt("enter age"))
        if (18<=a){
           alert("u are eligible for vote")
        }
        else{
            alert("u are not eligible ")
        }
    }


    return(
         
        <div>
           
          <Navbar/>

            <h1 style={{color:'red', fontSize:'50px', background: 'black', }}>hey cybrom</h1>
            <p>of mp nagar</p>
            <button onClick={Rahul}>Click Me</button>
            <Footer/>
            <img src={Img} style={{width:'150px', height:'200px', background:'yellow'}} />
            <Footer2/>
            <Checknumber/>
            <Shownumber/>
            <Shownumber1/>
        </div>
    )



}
export default App