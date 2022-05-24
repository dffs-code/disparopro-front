import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import { FormContainer } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';

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
          <Image src={logo} alt='disparopro logomarca' />
        </div>
        <div className='illustration'>
          <Image src={illustration} alt='illustration' />
        </div>
      </IllustrationContainer>
      <FormWrapper>
        <FormContainer>
          <span>Já é cliente Disparo Pro? <Link href='/login' className='create-account'>Fazer Login</Link></span>
          <span>Ainda não é cliente Disparo Pro? <Link href='/register' className='create-account'>Criar Conta</Link></span>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
