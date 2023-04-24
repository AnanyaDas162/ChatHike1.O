import { ReactDOM, useEffect } from "react";
import { useState } from "react";
import { addDoc,collection,onSnapshot,serverTimestamp,where,query,getDoc, orderBy } from "firebase/firestore";
import { db } from './FireBase';
import { Auth } from './Auth';
import { auth } from './FireBase.js';
import './Chat.css';
import './App.css';
import './Components/Toggle-btn.css';

const Chat = (props) => {
    const {room} = props;
    const [isChecked, setIsChecked] = useState(false);
    //This line is using destructuring assignment to extract the `room` prop from the `props` object and assign it to a variable named `room`.
    const[message, setMessage] = useState();
    const [messages, setMessages] = useState();
    const messageReference = collection(db, "messages");
    //This line is creating a reference to the `messages` collection in the Firestore database using the `collection` function from the `firebase/firestore` module.

    
    useEffect(
        ()=>{
            const queryMessage = query(messageReference, where("room","==",room));
             onSnapshot(queryMessage, (snapshot) => {
                //console.log("new");
                var messages = [];
                snapshot.forEach((doc) =>
                 {
                    messages.push({...doc.data(), id:doc.id});
                 }
                );
                setMessages(messages);
             })
        },[]
    )
    /*
    This block of code is using the `useEffect` hook to fetch 
    messages from the Firestore database and update the state 
    variable `messages` whenever the `room` prop changes or 
    when the component mounts. The `query` function from the 
    `firebase/firestore` module is used to create a query to 
    filter the messages based on the current `room` prop value. 
    The `onSnapshot` function from the same module is used to
     listen for updates to the query and update the `messages` 
     state variable accordingly. The `[]` dependency array
      passed as the second argument to `useEffect` ensures that
       the effect runs only once when the component mounts.
    */
    const store =()=>{
         return getDoc(collection(db, "messages"));
    };
    /* 
    
This function is not being used anywhere in the component, 
but it returns a promise that resolves to the first document
 in the `messages` collection in the Firestore database.
    */
    const sendChat = async(event) =>{
        event.preventDefault();
        console.log(message);
        if (message === ""){
            return;
        }
        await addDoc(messageReference, {
            text: message,
            time: serverTimestamp(),
            name:auth.currentUser.displayName,
            room,
        })
    }
    /*
    This block of code defines the `sendChat` function,
     which is called when the user submits the chat form.
      It first prevents the default form submission behavior 
      and then checks if the `message` state variable is empty.
    */

      const handleCheckBoxChange=()=>{
            setIsChecked(!isChecked);
      }

     return(
         <>
            <div className={`w-full h-full ${!isChecked ? 'light_theme' : 'dark_theme'} grid grid-cols-6`} id="chat-container">
                  <div className={`${!isChecked ? 'light_theme' : 'dark_theme'}  h-full w-full col-start-1 col-span-2`} id="list-container">
                      <div className=' h-full flex flex-col '>
                            <section className='h-20 grid w-full justify-items-center items-center w-full'id="display-name">
                                <h1 className='text-white font-semibold text-2xl'>{auth.currentUser.displayName}</h1>
                            </section>
                            <div className='w-full h-32 grid justify-items-center'>
                                <div className='h-36 w-36 grid justify-items-center'>
                                    <img className='h-full w-full rounded-full p-2' src={auth.currentUser.photoURL}/>
                                    {console.log(auth.currentUser.photoURL)}
                                </div>
                            </div> 
                            <div className='grid grid-rows-6 p-6'>
                                  <li className='flex p-2 bg-black'id="details">
                                        <h1 className='text-white p-4'>Email :   </h1>
                                        <h1 className='text-white  p-4'>{auth.currentUser.email}</h1>
                                  </li>  
                                  <li className='flex p-2 bg-black'id="details">
                                        <h1 className='text-white p-4'>Last SignIn Time :   </h1>
                                        <h1 className='text-white  p-4'>{new Date(auth.currentUser.metadata. lastSignInTime).toLocaleString()}</h1>
                                        {console.log(new Date(auth.currentUser.metadata. lastSignInTime))}
                                  </li>      
                            </div>
                      </div>
                  </div>
                  <div className={`${!isChecked ? 'light_theme' : 'dark_theme'}  grid justify-items-center items-start h-full col-start-3 col-span-4`} id="msg-container">
                        <section className='h-20 w-full grid  justify-items-center items-center'id="display-name">
                             <h1 className='text-white col-start-3 text-center w-fit font-semibold text-4xl'>{room}</h1>
                             <label className="switch col-start-6">
                                     <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} className="input__check"/>
                                     <span className="slider"></span>
                             </label>
                       </section>
                      <section display='grid pt-4 pb-4' id="holder">
                      <div className='grid grid-rows-6 gap-4 p-16  h-fit'>
                          {messages && messages.map((msg) => {
                           {console.log(auth.currentUser.displayName , msg.name)}
                          return(   
                          
                           <section className={`w-full flex ${auth.currentUser.displayName === msg.name ? 'flex-row-reverse' : 'flex-row'}`}> 
                            <div className='grid p-2 rounded-lg justify-items-center w-64 ' id="para">
                               <h1 className='text-white' id="sender">{msg.name}</h1>
                               <p key={msg.id} className='grid p-2 rounded-lg'>
                                     {msg.text}
                                     {console.log(messages)}
                                     {console.log(auth)}
                               </p>
                            </div>
                           </section> )
                          })}
                        </div>
                      </section>
                      <div className='grid w-full h-32 items-end' id="type-container">
                          <form onSubmit={sendChat} className='w-full h-full grid grid-cols-8  gap-0' id="form">
                             <input type="text" id="input"className={`w-96 col-span-7 rounded-lg ${!isChecked ? 'light_theme': 'dark_theme'}  ${!isChecked ? 'text-black' : 'text-white'}`} placeholder="Type your message here"
                              onChange={(event) => setMessage(event.target.value)}
                              value={message}
                            ></input>
                               <button className='send-btn col-span-1'>
                                      <div class="svg-wrapper-1">
                                           <div class="svg-wrapper">
                                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0h24v24H0z" fill="none"></path>
                                                      <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                     </div>
                               <span>Send</span>
                            </button>
                          </form>
                      </div>
                  </div>
            </div>
         </>
     );
}

export default Chat;