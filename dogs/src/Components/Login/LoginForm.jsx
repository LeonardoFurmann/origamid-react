import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Erro'
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <Input type="text" label="Usuário" name='username' {...username} />
        <Input type="password" label="Senha" name='password' {...password} />
        {loading ? <button disabled>Carregando...</button> :
          <Button>Entrar</Button>}
        {error && <Error error={error} />}
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastrar-se</h2>
        <p>Ainda não possuí conta? Cadastre-se no site</p>
        <Link to="/login/criar" className={stylesBtn.button}>Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
