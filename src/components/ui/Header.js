import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>Harshan Ahmad</h1>
             <p>swap things</p>
            <InputWrapper {...props}/>
        </header>
    );
}
