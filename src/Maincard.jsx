import React from 'react'
import Card from './Card'
import kk from './assets/netflix.png'

const App = () => {
  return (
    <div style={{display:"flex"}}>
    
      <Card img={kk}  price="10$" about="sdjh gfgsfdg sdfgsd fg ds fgsg"/>
      <Card img={kk}  price="89$" about="asdf asdf asdf assd asdf "/>
      <Card img={kk}  price="49$" about="qwert qwer qwer qwer qwer"/>
      <Card img={kk}  price="99$" about="qwert qwer qwer qwer qwer"/>
      <Card img={kk}  price="29$" about="qwert qwer qwer qwer qwer"/>
    
    </div>
  )
}

export default App
