import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import api from '../services/api';
import { FormContainer, FormItem, IconContainer, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Home() {
  const [ view, setView ] = useState(false);
  const [firstParam, setFirstParam] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    if(!firstParam || !password) toast.warn('Preencha todos os campos')
    
    const payload = {
      firstParam,
      password
    }

    await api.post('/login', payload).then((response) => {
      toast.success(`Usuário logado! Bem vindo(a), ${response.data.name}`)
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  return (
    <Wrapper>
      <IllustrationContainer>
        <div className='logo'>
          <Image src={logo} alt='disparopro logomarca' />
        </div>
        <div className='illustration'>
          <Image src={illustration} alt='illustration' />
        </div>
      </IllustrationContainer>
      <FormWrapper>
        <FormContainer>
          <h1>Login</h1>
          <FormItem>
            <label>Email ou Celular</label>
            <input type="text" id="login" className="input" onChange={({target}) => setFirstParam(target.value)}/>
          </FormItem>
          <FormItem>
            <label>Senha</label>
            <input type={view ? 'text' : 'password'} id="password" className="input" onChange={({target}) => setPassword(target.value)}/>
            <IconContainer onClick={() => setView(!view)}>
              {view ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          <Button type="button" id="submit" onClick={handleSubmit}>Conectar</Button>
          <span>Ainda não é cliente Disparo Pro?</span>
          <Link href='/register' className='create-account'>Criar Conta</Link>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
