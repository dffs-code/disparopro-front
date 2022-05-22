import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import Image from 'next/image';
import { FormContainer, FormItem, NewsletterItem, NewsletterText, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { FormCheck } from 'react-bootstrap';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Register() {
  const [phone, setPhone] = useState();
  const [accept, setAccept] = useState();
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
          <h1>Cadastre-se</h1>
          <FormItem>
            <label>Email ou Celular</label>
            <input type="text" id="login" className="input"/>
          </FormItem>
          <FormItem>
            <label>Telefone</label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={phone => setPhone}
            />
          </FormItem>
          <FormItem>
            <label>Senha</label>
            <input type="password" id="password" className="input"/>
          </FormItem>
          <FormItem>
            <label>Repetir Senha</label>
            <input type="password" id="repeat-password" className="input"/>
          </FormItem>
          <FormItem>
            <FormCheck
              type='radio'
              label='Eu li e aceito a política de privacidade da Disparo Pro'
              className='accept'
              />
          </FormItem>
          <NewsletterText>
            Quero receber ofertas, novidades, conteúdos informativos e publicitários da Disparo Pro
          </NewsletterText>
          <NewsletterItem>
            <FormCheck
              inline
              label="Sim"
              name="newsletter"
              type='radio'
            />
            <FormCheck
              inline
              label="Não"
              name="newsletter"
              type='radio'
            />
          </NewsletterItem>
          <Button type="button" id="submit">Cadastrar</Button>
          <span>Já é cliente Disparo Pro?</span>
          <Link href='/' className='create-account'>Fazer Login</Link>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
