import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import api from '../services/api';
import { FormContainer, FormItem, Label, Input, IconContainer, Button, ErrorBox } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { IoEye, IoEyeOff, IoWarning } from 'react-icons/io5'
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
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if(!firstParam || !password) return toast.warn('Preencha todos os campos')
    
    const payload = {
      firstParam,
      password
    }

    await api.post('/login', payload).then((response) => {
      setError(false)
      toast.success(`Usuário logado! Bem vindo(a), ${response.data.name}`)
    }).catch((error) => {
      if(error.response.status === 401){
        setError(true)
        setFirstParam('')
        setPassword('')
        return
      } else{
        toast.error(error.response.data.message)
        return
      }
    })
  }

  return (
    <Wrapper>
      <IllustrationContainer>
        <a href='/' className='logo'>
            <Image src={logo} alt='disparopro logomarca' />
        </a>
        <div className='illustration'>
          <Image src={illustration} alt='illustration' />
        </div>
      </IllustrationContainer>
      <FormWrapper>
        <FormContainer>
          <h1>Login</h1>
          <FormItem>
            <Label error={error} >Email ou Celular</Label>
            <Input error={error} type="text" id="login" className="input" value={firstParam} onChange={({target}) => setFirstParam(target.value)}/>
          </FormItem>
          <FormItem>
            <Label error={error} >Senha</Label>
            <Input error={error} type={view ? 'text' : 'password'} id="password" className="input" value={password}onChange={({target}) => setPassword(target.value)}/>
            <IconContainer onClick={() => setView(!view)}>
              {view ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          {error ?
          <FormItem>
            <ErrorBox> 
              <div className="lateralBorder"></div>
              <div className="icon">
                <IoWarning />
              </div>
              <span>Usuário ou senha incorreta, tente novamente.</span>
            </ErrorBox>
          </FormItem>
          : ''
          }
          <Button type="button" id="submit" onClick={handleSubmit}>Conectar</Button>
          <span>Ainda não é cliente Disparo Pro?</span>
          <Link href='/register' className='create-account'>Criar Conta</Link>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
