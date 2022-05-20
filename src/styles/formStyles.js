import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 26rem;
  box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.2);
  min-height: 26rem;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 3rem;

  h1{
    font-size: 26px;
    color: rgba(18, 61, 104, 1);
    font-weight: 700;
  }
  
  a{
    color: rgba(18, 61, 104, 1);
    font-weight: 700;
    :hover{
      text-decoration: underline
    }
  }

  input{
    width: 20rem;
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid  rgba(18, 61, 104, 1);
  }

  label{
    color: rgba(18, 61, 104, 1);
  }
`;

export const Button = styled.button`
  width: 15rem;
  height: 3.125rem;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(350deg, rgba(18, 61, 104, 1), rgba(58, 163, 245, 0.86));
  color: white;
  font-weight: bold;
  border-radius: 6px;
`;