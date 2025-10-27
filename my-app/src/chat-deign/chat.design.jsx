import { data } from "autoprefixer";
import React,{useState} from "react";
import {FaPaperPlane} from 'react-icons/fa'
 function Chat() {

    const [messages, setMessages]=useState([])
    const [message,setMessage] =useState("")

    // React side
const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, sender: "user" }]);
    const userMessage = message;
    setMessage("");

    try {
        const response = await fetch("/api/openai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (err) {
        console.log(err);
        setMessages(prev => [...prev, { text: "Error getting reply", sender: "bot" }]);
    }
};

    return(
        <div className="app justify-content-center align-items-center py-2" style={{minHeight:"100vh",border:"1px solid"}}>
            <center>
         <div className=" bg-dark border rounded col-md-5">
            <h4 className="text-white ">Live Chat</h4>
         </div>
         <div className="chat border rounded col-md-5 bg-light p-3 mb-3" style={{height:"300px",overflowY:"auto"}}>
            {messages.length===0 ?(
                <p>no..message..yet</p>
            ):(
                messages.map((msg,index)=>(
                    <p key={index} className={msg.sender === "user" ? "bg-primary" : "bg-success"} style={{
                        color:"white",
                        padding:"8px 12px",
                        borderRadius:"19px  0px 19px 0px",
                        width:"fit-content",
                        marginLeft:msg.sender === "user" ? "auto":"0",
                        wordWrap:"break-word"
                    }}>
                        {msg.text}
                    </p>
                ))
            )}
         </div>
         <div className="col-md-5">
            <form  onSubmit={handleSend} action="" className="d-flex " style={{ gap:"10px"}}>

                <input type="text" name="" id="" 
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="form-control"
                />
                <button className="btn btn-success"><FaPaperPlane/></button>


            </form>
         </div>

         </center>
        </div>
    )
    
 }
 export default Chat 