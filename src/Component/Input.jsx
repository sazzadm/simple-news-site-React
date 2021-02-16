import React from 'react'

 function Input(props) {
    return (
        <>
            <input 
                type= {props.type}
                className= {props.className}
                placeholder= {props.placeholder}
                name = {props.name}
                value= {props.value}
                onChange= {props.onChange}
                onKeyPress= {props.keyPress}
                />
        </>
    )
}
export default Input;