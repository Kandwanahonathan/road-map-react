import React,{useState,useEffect} from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chat=()=>{
    const [message,setMessage] =useState("");
    const messages=([""])
    return(
        
        <div className="App">
            <center>
            <div className="head mt-3  border rounded col-md-5  bg-dark" style={{backgroundColor:""}}>
                <h4 className="text-white fw-bold fst-italic">Live Chat</h4>
                </div>
               <div className="chat-box col-md-5 col-ms-10">
             {/* message box */}
                <div className="border rounded p-3 mb-3 shadow-m"
                style={{
                    height:"300px",
                    backgroundColor:"#f8f9fa",
                    overflowY:"auto",
                }}
                
                >


                </div>

               </div>
            <div className="col-md-5 col-sm-10">
                <form action="" className="d-flex align-items-center form-container ">
                <input type="text" value={message} placeholder="!type your message ......" 
                className="form-control me-2"

                onChange={(e)=>setMessage(e.target.value)}
                
                />
                <button className="btn btn-success" onClick={add}>
                    <i className="bi bi-send-fill"></i>
                </button>
                </form>
                <p className="mt-3"><strong>{message}</strong></p>
            </div>
            </center>



        </div>
    )
}
export default Chat 