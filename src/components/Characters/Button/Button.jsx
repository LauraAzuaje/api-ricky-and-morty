import React from "react";
import './Button.css'

export function Button(props){
    const {name, onChange, page} = props;

    return(
        <>{page?<button onClick={onChange}>{name}</button>:null}</>
    );

}