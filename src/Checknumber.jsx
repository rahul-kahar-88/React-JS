const Checknumber = ()=>{
    let number = () =>{
        let a = parseInt(prompt("enter any number : "))
        if (a>=1){
            alert("+ve number")
        }
        else if(a<0){
            alert("-ve number")
        }
        else{
            alert ("zero")
        }
        
    }

    return(
       
            <button onClick={number}> click to check no.</button>
        
    )
}
export default Checknumber