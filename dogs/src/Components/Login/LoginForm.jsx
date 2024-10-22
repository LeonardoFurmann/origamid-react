import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const {userLogin, error, loading} = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {

      userLogin(username.value, password.value)
      
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name='username' {...username} />
        <Input type="password" label="Senha" name='password' {...password} />
        {loading ? <button disabled>Carregando...</button> :
        <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
