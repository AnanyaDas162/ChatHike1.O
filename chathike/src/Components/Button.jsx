import {react, reactDom} from 'react';
import './Button.css';

const Button=({text})=>{
     return(
        <>
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                </span>
                <span class="button-text">{text}</span>
            </button>
        </>
     );
}

export default Button;