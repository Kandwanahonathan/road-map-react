import React,{useState,useEffect} from "react";
const Chat=()=>{
    return(
        
        <div className="App">
            <center>
            <div className="head">
                <h4>Live Chat</h4>
                </div>
               
            <div className="md-5 col-5">
                <form action="" className="d-flex align-items-center form-container ">
                <input type="text" placeholder="!type your message ......." className="form-control me-2"/>
                <button className="btn btn-success">
                    <i className="bi bi-send-fill"></i>
                </button>
                </form>
            </div>
            </center>



        </div>
    )
}
export default Chat