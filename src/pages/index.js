import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import Image from 'next/image';
import { FormContainer, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles'
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;



export default function Home() {
  
  return (
      <Wrapper>
      <IllustrationContainer>
        <div className='logo'>
          <Image src={logo} alt='disparopro logomarca'/>
        </div>
        <div className='illustration'>
          <Image src={illustration} alt='illustration'/>
        </div>
      </IllustrationContainer>
      <FormWrapper>
        <FormContainer>
          <h1>Login</h1>
          <div>
            <label>Email ou Celular</label>
            <input type="text" id="login"/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" id="login"/>
          </div>
          <Button type="button" id="submit">Conectar</Button>
          <span>Ainda não é cliente Disparo Pro?</span>
          <Link href='/register' className='create-account'>Criar Conta</Link>
        </FormContainer>
      </FormWrapper>
      </Wrapper>
  );
}
