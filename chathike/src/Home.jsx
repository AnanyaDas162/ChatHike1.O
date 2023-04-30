import React from "react";
import { ReactDOM } from "react";
import home from './Images/home.jpg';
import './Home.css';
import ButtonArrow from './Components/Button.jsx';
import phone from './Images/phone2.gif';
import wave from './Images/wave.svg';
import menu from './Images/menu-bar.png';

const Home=(props)=>{
    return(
         <>
            <div className='grid grid-cols-2 gap-9 justify-items-center items-center' id="home-container">
            <button className='w-16 fixed top-6 right-6 hidden'><img src={menu}></img></button>
              
                <div id="description" className='pl-11'>
                    <div className='flex justify-items-center items-center'id="hike-holder"><h1 className='font-extrabold, text-9xl' id="chat-hike">ChatHike</h1></div>
                    <div><h6 className='text-white , text-xl' id="chat-hike-description">A real time chat application where the users can create a room after the sign up or log in feature and can have a conversation through chatting.
                    </h6></div>
                    <div className='grid grid-cols-4 pt-12'><a className='col-start-2' id="get-btn" href={props.id1}><ButtonArrow text="Get Started"></ButtonArrow></a></div>
                </div>
                <section className=' h-screen grid justify-items-center items-center' id="img-container">
                <div id="image">
                    <img src={phone}></img>
                </div>
                </section>
            </div>
            <section className='grid grid-cols-8' id="menulist">
                   <input type="checkbox" id="active"/>
                   <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
                   <div className="wrapper col-start-7">
                   <ul>
                  <li><a href="#home-container">Home</a></li>
                  <li><a href={props.id1}>Sign Up</a></li>
                  <li><a href={props.id1}>Log In</a></li>
                  <li><a href={props.id2}>Service</a></li>
                  <li><a href={props.id3}>Contact</a></li>
               </ul>
            </div>
               </section>
         </>
    );
}

export default Home;