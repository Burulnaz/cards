import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './components/ Aboutus'
import Contacts from './components/Contacts'
import Heder from './components/Heder'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from './components/AddForm'
import Home from './components/Home'

const App = () => {
  const [cards, setCatds] = useState([]);
    let hendleSome = (obj) => {
      let newSome = [...cards];
      newSome.push(obj);
      setCatds(newSome);
      console.log(cards);
    }
  
  return (
    <div>
      <BrowserRouter>
         <Heder/>
         <Routes>
         <Route path='/' element={<Home cards={cards}/>}/>
          <Route path='/add' element={<AddForm hendleSome={hendleSome}/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App