import React from 'react'

const Main = (props) => {

  const {year, month, today, hour, minute, seconds} = props

    return(
      <div>
        <h1>main</h1>
        <h3>hello world</h3>
        <p>hello world</p>
        <div className="newClass">
           <div style={{color: "red"}}>
             년: {year}
           </div>
           <div style={{color: "#fff"}}>
             월/일: {month}/{today}
           </div>
           <div style={{color: "#fff"}}>
             시간: {hour}시{minute}분{seconds}초
           </div>
         </div>
      </div>
    )
  }

export default Main