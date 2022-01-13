import React from 'react'

const Footer = (props) => {

    const { name, hobby, food, color } = props

    return(
      <div>
        <h1>제 이름은 {name}입니다.</h1>
        <p>취미: {hobby}</p>
        <p>좋아하는 음식: {food}</p>
        <p style={{color: "blue"}}>좋아하는 색: {color}</p>
      </div>
    )
  }

export default Footer