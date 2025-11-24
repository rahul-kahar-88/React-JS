
let Card = (card)=> {
  let { img , price, about } = card;
  return (
  <div style={{ width:"200px" ,  border:"2px solid black"  , padding:"5px"  }}>

    <img src={img} style={{width:"200px" , height:"300px" }}/>
    <h4>price : {price}</h4>
    <p> about : {about}</p>
   

  </div>
  )
}

export default Card
