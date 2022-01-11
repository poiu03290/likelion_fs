import React from 'react'

function One(props) {
    const name = props.name
  
    if(name) {
        return(
            <div>개같이 이름 있음</div>
        )
    } 
}

export default One;