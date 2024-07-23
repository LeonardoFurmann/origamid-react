import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    estado: '',
    bairro: '',
    cidade: '',
  })

  const [response, setResponse] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault();
      const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setResponse(response)
    }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id='nome' name='nome' type="text" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input id='email' name='email' type="text" value={form.email} onChange={handleChange} />
      <label htmlFor="senha">Senha</label>
      <input id='senha' name='senha' type="password" value={form.senha} onChange={handleChange} />
      <label htmlFor="cep">CEP</label>
      <input id='cep' name='cep' type="number" value={form.cep} onChange={handleChange} />
      <label htmlFor="rua">Rua</label>
      <input id='rua' name='rua' type="text" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input id='numero' name='numero' type="number" value={form.numero} onChange={handleChange} />
      <label htmlFor="bairro">Bairro</label>
      <input id='bairro' name='bairro' type="text" value={form.bairro} onChange={handleChange} />
      <label htmlFor="cidade">Cidade</label>
      <input id='cidade' name='cidade' type="text" value={form.cidade} onChange={handleChange} />
      <label htmlFor="estado">Estado</label>
      <input id='estado' name='estado' type="text" value={form.estado} onChange={handleChange} />
      <button>Enviar</button>
      {response && response.ok && <p>{response}</p>}
    </form>
  )
}

export default App
