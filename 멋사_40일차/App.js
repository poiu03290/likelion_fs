import React, { useState } from 'react'
import './App.css';
import Header from './components/Header.js'
import Main from'./components/Main.js'
import Product from './components/Product.js'
import Footer from './components/Footer.js'

function App() {


const date = new Date()
const [year, ] = useState(date.getFullYear())
const [month] = useState(date.getMonth() + 1)
const [today] = useState(date.getDate())
const [hour] = useState(date.getHours())
const [minute] = useState(date.getMinutes())
const [seconds] = useState(date.getSeconds())
const [name, setName] = useState('권혁')
const [hobby, setHobby] = useState('게임')
const [food, setFood] = useState('고기')
const [color, setColor] = useState('blue')



  return (
    <div>
      <Header />
      <Main date={date} year={year} month={month} today={today} hour={hour} minute={minute} seconds={seconds}/>
      <Product />
      <Footer  name={name} hobby={hobby} food={food} color={color} />
    </div>
  );
}

export default App;