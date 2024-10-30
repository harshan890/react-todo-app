import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>Things To Do</h1>
             <p>swap things</p>
            <InputWrapper {...props}/>
        </header>
    );
}
