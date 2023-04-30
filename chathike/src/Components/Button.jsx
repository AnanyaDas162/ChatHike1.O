import {react, reactDom} from 'react';
import './Button.css';

const Button=(props)=>{
     return(
        <>
            <button class="learn-more">
                <a class="circle" aria-hidden="true" href={props.id}>
                      <span class="icon arrow"></span>
                </a>
                <span class="button-text">{props.text}</span>
            </button>
        </>
     );
}

export default Button;