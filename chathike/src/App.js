import './App.css';
import Auth from './Auth.js';
import Cookies from 'universal-cookie';
import { useState,useRef } from 'react';
import Chat from './Chat.js';
import Home from './Home.jsx';
import './Components/ButtonArrow.css';

import ButtonArrow from './Components/ButtonArrow.jsx';
import google from './Images/google.gif';
import { CometChat } from "@cometchat-pro/chat";
import Swiper1 from './Swiper1.jsx';
import github from './Images/github.png';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import linkedin from './Images/linkedin.png';

const cookie = new Cookies();

function App() {
  const [isAuth, setAuth] = useState(cookie.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomReference = useRef(null);


/*
  const appID = "APP_ID";
const region = "REGION";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
let authKey = "AUTH_KEY";
var uid = "user1";
var name = "Kevin";

var user = new CometChat.User(uid);
user.setName(name);
CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)*/

  console.log({isAuth});
  if (!isAuth) {
    return (
      <>
          <Home id1="#auth" id2="#swiper-holder" id3="#footer" id4="#auth-container"><section></section></Home>
          <div id="auth"><Auth header="Hello Guys!" id="#auth-container" para="Please sign up or log in through your Google mail id to enter a chat room and have a blissful conversation with your friends." display="grid"></Auth></div>
          <section className='h-screen grid grid-cols-2 justify-items-center items-center' id="swiper-holder">
               <div className='grid justify-items-start items-center h-screen' id="swiper-1">
                     <Swiper1></Swiper1>
               </div>
               <div className='grid grid-rows-6 gap-4'id="list-holder">
                   <h1 className='text-white text-5xl' id="hike-header">Lets Hike!</h1>
                   <li className='text-white list-item'>At first sign up or log in with google account.</li>
                   <li className='text-white list-item'>Reload the page</li>
                   <li className='text-white list-item'>Enter the room name where you wanna enter</li>
                   <li className='text-white list-item'>If room does not exist, then create</li>
                   <li className='text-white list-item'>After entering the room, chat with your friends!</li>
               </div>
          </section> 
          
                  

        <div id="footer">
          <footer className='h-60 grid grid-cols-4 grid-rows-2 justify-items-center items-center'>
              <a href="https://github.com/AnanyaDas162">
                <img src={github} className='h-24 icon-img'></img>
              </a>
              <a href="https://www.linkedin.com/in/ananya-das-7559b7201/">
                <img src={linkedin} className='h-24 icon-img'></img>
              </a>
              <a href="https://www.facebook.com/ananyadas.jinia">
                <img src={facebook} className='h-24  icon-img'></img>
              </a>
              <a href="https://www.instagram.com/ananyadasjinia/">
                <img src={instagram} className='h-24 icon-img'></img>
              </a>
              <div className='row-start-2 grid grid-cols-4 justify-items-center w-screen'>
                <h1 className='text-white font-extrabold text-xl col-start-4' id="copy">@CopyRight Ananya Das 2023</h1>
              </div>
          </footer>  
        </div>   
      </>
    );
  }
  if (room){
    return (
       <>
         <Chat room={room}></Chat>
       </>
    );
  }
  return (
     <>
           <div className='h-screen grid justify-items-center items-center' id="auth-container">
            <section className='h-3/4 grid grid-rows-5 justify-items-center items-center' id="sign-up-container">
              <h1 className='text-4xl text-black font-extrabold' id="hello-guys">Enter or Create a Room</h1>
              <div className='w-1/2 grid justify-items-center items-center'>
                   <h6 className='text-justify text-xl' id="sign-up-description">If you want to enter in a new room then just create it or otherwise select an existing room.</h6>
              </div>
              <div className='w-72 h-10 grid justify-items-center items-center '>
                    <input className='bg-white w-full h-full rounded-md grid justify-items-center items-center' type="text" placeholder='Type the name of room' ref={roomReference}></input>
              </div>
              
              <button  onClick={
                () => setRoom(roomReference.current.value)} className='send-btn'>
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
                {console.log(room)}
            </section>
        </div>
     </>
  );
}

export default App;
