import { useEffect, useState } from 'react'
import Input from './input.jsx';
import Select from './select.jsx';
import Radio from './radio.jsx';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


function App() {

  const [pergunta, setPergunta] = useState('');
  const [indice, setIndice] = useState(0);
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setPergunta(perguntas[indice])
  // }, [indice])

  function handleSubmit(event) {
    event.preventDefault();
    setPergunta(perguntas[indice])
    if (pergunta === perguntas[indice].resposta) {
      setCount(count + 1)
    }
    setIndice(indice + 1)

  }



  return (
    <>
      <form onSubmit={() => handleSubmit(event)}>
        {perguntas.length > indice ?
          <>
            <h3>{perguntas[indice].pergunta}</h3>
            <Radio
              options={perguntas[indice].options}
              value={pergunta}
              setValue={setPergunta} />
            <button>Próxima</button>
          </>
          : <p>Você acertou {count} de {perguntas.length}</p>
        }
      </form>
    </>

  )
}

export default App
