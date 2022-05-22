import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import Image from 'next/image';
import { FormContainer, FormItem, NewsletterItem, NewsletterText, IconContainer, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { FormCheck } from 'react-bootstrap';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [accept, setAccept] = useState();
  const [newsletter, setNewsletter] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);

  const handleRegister = async () => {
    if(name < 5 || name > 100 || nome == null){
      toast.error('Informe um nome de usuário correto.')
      return
    }
    if( password.length < 8 || password.length > 60 || password == null || confirmPassword.length < 8 || confirmPassword.length > 60 || confirmPassword == null){
      toast.error('Informe uma senha correta.')
      return
    }
    if(password !== confirmPassword){
      toast.error('Os campos de senha não são iguais.')
      return
    }
    if(email < 5 || email > 100 || email == null){
      toast.error('Informe um email correto.')
      return
    }
    if(!accept){
      toast.error('Aceite os termos de uso para continuar, obrigado!')
      return
    }
    if(!newsletter){
      toast.error('Deseja permitir que a Disparo Pro envie publicações e promoções por e-mail e SMS para você?')
      return
    }
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
          <h1>Cadastre-se</h1>
          <FormItem>
            <label>Nome</label>
            <input type="text" id="name" className="input" value={name} onChange={({target}) => setName(target.value)}/>
          </FormItem>
          <FormItem>
            <label>Email</label>
            <input type="email" id="email" className="input" value={email} onChange={({target}) => setEmail(target.value)}/>
          </FormItem>
          <FormItem>
            <label>Telefone</label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={phone => setPhone(phone)}
            />
          </FormItem>
          <FormItem>
            <label>Senha</label>
            <input type={viewPassword ? 'text' : 'password'} id="password" className="input" value={password} onChange={({target}) => setPassword(target.value)}/>
            <IconContainer onClick={() => setViewPassword(!viewPassword)}>
              {viewPassword ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          <FormItem>
            <label>Repetir Senha</label>
            <input type={viewConfirm ? 'text' : 'password'} id="repeat-password" className="input" value={confirmPassword} onChange={({target}) => setConfirmPassword(target.value)}/>
            <IconContainer onClick={() => setViewConfirm(!viewConfirm)}>
              {viewConfirm ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
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
