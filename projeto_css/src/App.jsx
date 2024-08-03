
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Sobre from './Components/Sobre'
import Erro404 from './Components/Erro404'
import Header from './Components/Header'
import Produto from './Components/Produto'
import ProdutoDescricao from './Components/ProdutoDescricao';
import ProdutoAvalicao from './Components/ProdutoAvalicao';
import ProdutoCustomizado from './Components/ProdutoCustomizado';

function App() {
  return (
    <>

      <BrowserRouter>
          <Header></Header>
         <Routes>
           <Route path='/' element = {<Home/>}></Route>
           <Route path='sobre' element = {<Sobre/>}></Route>
           <Route path='*' element = {<Erro404/>}></Route>
           <Route path='produto/:id/*' element = {<Produto/>}>
                <Route path='' element={<ProdutoDescricao />}></Route>
                <Route path='avaliacao' element={<ProdutoAvalicao />}></Route>
                <Route path='customizado' element={<ProdutoCustomizado />}></Route>
           </Route>
         </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
