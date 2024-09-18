import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Produtos from './componentes/Produtos'
import Header from './componentes/Header'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <div className='content'>      
          <Routes>
              <Route path='/' element={<Produtos/>}/>
              <Route path='/contato' element={<Contato/>}/>
          </Routes>   
          <Footer /> 
          </div> 
      </BrowserRouter>
      </div>
  )
}

export default App
