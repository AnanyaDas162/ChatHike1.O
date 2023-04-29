import React from "react";
import { ReactDOM } from "react";
import home from './Images/home.jpg';
import './Home.css';
import ButtonArrow from './Components/Button.jsx';
import phone from './Images/phone2.gif';
import wave from './Images/wave.svg';
import menu from './Images/menu-bar.png';

const Home=()=>{
    return(
         <>
            <div className='grid grid-cols-2 gap-9 justify-items-center items-center' id="home-container">
            <button className='w-16 fixed top-6 right-6'><img src={menu}></img></button>
                <div id="description" className='pl-11'>
                    <div className='flex justify-items-center items-center'id="hike-holder"><h1 className='font-extrabold, text-9xl' id="chat-hike">ChatHike</h1></div>
                    <div><h6 className='text-white , text-xl' id="chat-hike-description">A real time chat application where the users can create a room after the sign up or log in feature and can have a conversation through chatting.
                    </h6></div>
                    <div className='grid grid-cols-4 pt-12'><span className='col-start-2'><ButtonArrow text="Get Started"></ButtonArrow></span></div>
                </div>
                <section className=' h-screen grid justify-items-center items-center' id="img-container">
                <div id="image">
                    <img src={phone}></img>
                </div>
                </section>
            </div>
         </>
    );
}

export default Home;