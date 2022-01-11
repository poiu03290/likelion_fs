import React from 'react'

function Two(props) {
    const name = props.name
  
    if(name) {
        return(
            <div>개같이 이름 없음</div>
        )
    } 
}

export default Two;