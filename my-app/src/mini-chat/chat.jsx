import React,{useState} from "react";
import {IoMdSend} from "react-icons/io";
function Chat() {
    return(
        <div className="style">
            <div className="input">
                <textarea type="text" name="" id="" placeholder="enter chat"
                style={{
                borderColor:"green",
                borderRadius:"15px",
                border:"none",
                border:"2px solid", 
                width:"250px",
                outline:"none",
                padding:"10px 15px",
                textAlign:"center",
                color:"green" }}></textarea>
            </div>
            <div className="btn">
                <button style={{
                    color:"whitesmoke",
                    backgroundColor:"green",
                    border:"none",
                    width:"10%",
                    height:"7vh",
                    borderRadius:"5px"
                }}>IoMdSend</button>
            </div>

        </div>
    )
}
export default Chat