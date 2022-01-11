import React from 'react'
import One from '../components/One'
import Two from '../components/Two'


function Name(props) {
    const name = props.name
  
    if(name) {
        return(
            <One name={name}/>
        )
    } else {
        return (
            <Two />
        )
    }
}

export default Name;