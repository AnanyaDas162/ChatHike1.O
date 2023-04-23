import { ReactDOM, useEffect } from "react";
import { useState } from "react";
import { addDoc,collection,onSnapshot,serverTimestamp,where,query,getDoc } from "firebase/firestore";
import { db } from './FireBase';
import { Auth } from './Auth';
import { auth } from './FireBase.js';

const Chat = (props) => {
    const {room} = props;
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
     return(
         <>
            <h1>Name</h1>
           <div>
           {messages && messages.map((msg) => (
        <p key={msg.id}>
          {msg.text} - {msg.name}
        </p>
      ))}
           </div>
            <form onSubmit={sendChat}>
                <input type="text" placeholder="Type your message here"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                ></input>
                <button type="submit"></button>
            </form>
         </>
     );
}

export default Chat;