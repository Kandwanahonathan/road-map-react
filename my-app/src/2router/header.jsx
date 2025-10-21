import React,{useState,useEffect, use} from "react";
const Header =()=>{
    const [word,SetWord] =useState(["developer","system design","forntend","cleanerand tester"])
    const [index , setIndex]=useState(0);
    useEffect(()=>{
    const timer=setInterval(()=>{
        setIndex((prev)=>(prev +1) % word.length)
    },2000);
    return ()=>clearInterval(timer);
    },[word])

  return(
    <div>
        <h1  style={{color:"Gray"}}>Mr Nathan {""} <span 
        style={{
            fontWeight:"500",
            color:"greenyellow",
            transition:"0.5s,ease-in-out",
            fontSize:"40px"
        }}
        >{word[index]}</span></h1>
        
    </div>
  )


}
export default Header