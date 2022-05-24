import logo from '../../public/logo.svg'
import illustration from '../../public/illustration.svg'
import styled from "styled-components";
import Image from 'next/image';
import { FormContainer, FormItem, NewsletterItem, Input, Label, NewsletterText, IconContainer, Button } from '../styles/formStyles';
import { IllustrationContainer, FormWrapper } from '../styles/pageStyles';
import { FormCheck } from 'react-bootstrap';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify';
import api from '../services/api';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [accept, setAccept] = useState(false);
  const [newsletter, setNewsletter] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);

  const handleRegister = async () => {
    if (name < 5 || name > 100 || name == null) return toast.error('Informe um nome de usuário correto.')

    if (password.length < 8 || password.length > 60 || password == null || confirmPassword.length < 8 || confirmPassword.length > 60 || confirmPassword == null) return toast.error('Informe uma senha correta.')

    if (password !== confirmPassword) return toast.error('Os campos de senha não são iguais.')
    if (email < 5 || email > 100 || email == null) return toast.error('Informe um email correto.')
    if (!accept) return toast.error('Aceite os termos de uso para continuar, obrigado!')
    if (!newsletter) return toast.error('Deseja permitir que a Disparo Pro envie publicações e promoções por e-mail e SMS para você?')

    const payload = {
      name,
      email,
      phone,
      password,
      accept_terms: accept,
      accept_newsletter: newsletter
    }

    await api.post('/register', payload).then((response) => {
      if (response.data.id) return toast.success('Parabéns, você se cadastrou na Disparo Pro!')
    }).catch((error) => {
      if (error.response.status === 400) return toast.error('Ops, parece que este email já está sendo utilizado! Tente com outro email')
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
          <h1>Cadastre-se</h1>
          <FormItem>
            <Label>Nome</Label>
            <Input type="text" id="name" className="input" defaultValue={name} onChange={({ target }) => setName(target.value)} />
          </FormItem>
          <FormItem>
            <Label>Email</Label>
            <Input type="email" id="email" className="input" defaultValue={email} onChange={({ target }) => setEmail(target.value)} />
          </FormItem>
          <FormItem>
            <Label>Telefone</Label>
            <PhoneInput
              country={'us'}
              defaultValue={phone}
              onChange={phone => setPhone(phone)}
            />
          </FormItem>
          <FormItem>
            <Label>Senha</Label>
            <Input type={viewPassword ? 'text' : 'password'} id="password" className="input" defaultValue={password} onChange={({ target }) => setPassword(target.value)} />
            <IconContainer onClick={() => setViewPassword(!viewPassword)}>
              {viewPassword ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          <FormItem>
            <Label>Repetir Senha</Label>
            <Input type={viewConfirm ? 'text' : 'password'} id="repeat-password" className="input" defaultValue={confirmPassword} onChange={({ target }) => setConfirmPassword(target.value)} />
            <IconContainer onClick={() => setViewConfirm(!viewConfirm)}>
              {viewConfirm ? <IoEyeOff /> : <IoEye />}
            </IconContainer>
          </FormItem>
          <FormItem>
            <FormCheck
              type='radio'
              label='Eu li e aceito a política de privacidade da Disparo Pro'
              className='accept'
              checked={accept}
              onChange={() => setAccept(true)}
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
              onChange={() => setNewsletter(true)}
            />
            <FormCheck
              inline
              label="Não"
              name="newsletter"
              type='radio'
              onChange={() => setNewsletter(false)}
            />
          </NewsletterItem>
          <Button type="button" id="submit" onClick={handleRegister}>Cadastrar</Button>
          <span>Já é cliente Disparo Pro?</span>
          <Link href='/login' className='create-account'>Fazer Login</Link>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
