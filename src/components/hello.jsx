import React from 'react'

const hello = (props) => {
    if(props.name){
        return (
          <h1>hello, {props.name}</h1>
        )
    }else{
        return (
            <span>hello, stranger</span>
          )
    }
}

export default hello