import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import Image from 'next/image';
import { FormContainer, FormItem, IconContainer, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { IoEye, IoEyeOff } from 'react-icons/io5'
import Link from 'next/link';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Home() {
  const [ view, setView ] = useState(false);
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
            <input type="text" id="login" className="input"/>
          </FormItem>
          <FormItem>
            <label>Senha</label>
            <input type={view ? 'text' : 'password'} id="password" className="input"/>
            <IconContainer onClick={() => setView(!view)}>
              {view ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          <Button type="button" id="submit">Conectar</Button>
          <span>Ainda não é cliente Disparo Pro?</span>
          <Link href='/register' className='create-account'>Criar Conta</Link>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
