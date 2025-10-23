import React,{useState,useEffect} from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chat=()=>{
    const [message,setMessage] =useState("");
    const [messages,setMessages] = useState([]);

    const handleSend = (e)=>{
        e.preventDefault()
        if(message.trim() !== ""){
            setMessages([...messages,message])

            setMessage("")
        }
    }

    return(
        
        <div className="App text-center mt-2">
            <center>
            <div className="head mt-3  border rounded col-md-5  bg-dark" >
                <h4 className="text-white fw-bold fst-italic">Live Chat</h4>
                </div>
               <div className="chat-box col-md-5 col-ms-10">
             {/* message box */}
                <div className="border rounded p-3 mb-3 shadow-m"
                style={{
                    height:"300px",
                    backgroundColor:"#f8f9fa",
                    overflowY:"auto",
                }} >
                    {messages.length===0 ?(
                        <p className="text-muted text-center text-white border rounded" style={{height:"10vh", backgroundColor:"blue",border:"1px sold", width:"30%",position:"relative",left:"130px"}}>no ....message...yet</p>
                    ):(
                        messages.map((msg,index)=>(
                            <div key={index} className="alert alert-success py-2 px-2 mb-2">
                                {msg}

                            </div>
                        ))
                    )}
                </div>

               </div>
            <div className="col-md-5 col-sm-10">
                <form onSubmit={handleSend} action="" className="d-flex align-items-center form-container ">
                <input type="text" value={message} placeholder="!type your message ......" 
                className="form-control me-2"

                onChange={(e)=>setMessage(e.target.value)}
                
                />
                
                <button className="btn btn-success">
                    <i className="bi bi-send-fill"></i>
                </button>
                </form>
                
            </div>
             <p className="mt-3 ">message your are writing:....<strong>{message}</strong></p>
            </center>



        </div>
    )
}
export default Chat 