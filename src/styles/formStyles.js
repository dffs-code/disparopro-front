import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 26rem;
  border: 1px solid rgba(202, 203, 204, 1);
  box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.2);
  min-height: 26rem;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 3rem;

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

  .input{
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

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  position: relative;

  .react-tel-input input{
    width: 20rem;
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid  rgba(18, 61, 104, 1);

  }

  .form-control:focus{
    border: 1px solid  rgba(18, 61, 104, 1);
    box-shadow: none;
  }

  #accept{
    position: absolute;
    left: 0;
    border: 2px solid  rgba(18, 61, 104, 1);
  }
`;

export const NewsletterItem = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const NewsletterText = styled.span`
  color: rgba(18, 61, 104, 1);
  line-height: 1.2rem;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  color: rgba(18, 61, 104, 1);
  position: absolute;
  top: 2.25rem;
  right: 0.6rem;
  transition: all 0.2s ease-in-out;

  :hover{
    color: #0a2947;
  }
`;