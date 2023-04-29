import {auth, provider} from './FireBase.js';
import { getAuth, signInWithPopup } from 'firebase/auth';
import Cookies from "universal-cookie";
import { useState } from 'react';
import './Auth.css';
import './Components/ButtonArrow.css';
import ButtonArrow from './Components/ButtonArrow.jsx';
import google from './Images/google.gif';

const cookies = new Cookies();

function Auth(props){
   
    const googleSignUp = async()=>{
         const result =  await signInWithPopup(auth, provider);
         cookies.set("auth-token",result.user.refreshToken);
         console.log(result);
         /*
         
         The code you provided is using the await keyword to call the signinwithpopup() function with two arguments: auth and provider. The function likely authenticates a user with a third-party provider using a popup window.

The await keyword is used with a function that returns a promise. It waits for the promise to resolve or reject before continuing the execution of the code. In this case, the signinwithpopup() function is likely an asynchronous function that returns a promise. The const result variable will be assigned the resolved value of the promise returned by the signinwithpopup() function.

Without more context or information about the specific auth and provider variables and the signinwithpopup() function, it is difficult to provide a more detailed explanation.
         
         */
    }
   
         return(   
       <>
        <div className='h-screen grid justify-items-center items-center' id="auth-container">
            <section className='h-3/4 grid grid-rows-5 justify-items-center items-center' id="sign-up-container">
              <h1 className='text-4xl text-black font-extrabold' id="hello-guys">{props.header}</h1>
              <div className='w-1/2 grid justify-items-center items-center'>
                   <h6 className='text-justify text-xl' id="sign-up-description">{props.para}</h6>
              </div>
              <button style={{display:`${props.display}`}}className='font-light text-2xl w-1/2 grid grid-cols-8 justify-items-center items-center cssbuttons-io-button ' onClick={googleSignUp} id="sign-up-btn">
                   <div className='grid justify-items-center items-center overflow-hidden'>
                   <img src={google} id="google-img"></img>
                   </div>
                   <h1 className='col-span-6' id="log-in">Sign Up or Log in</h1>
                   <ButtonArrow></ButtonArrow>
               </button>
            </section>
        </div>
       </> 
       ); 
   

}

export default Auth ;
