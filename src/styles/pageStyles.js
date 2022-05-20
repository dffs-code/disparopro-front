import styled from 'styled-components';

export const IllustrationContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, rgba(18, 61, 104, 1), rgba(58, 163, 245, 0.86));

  .logo {
    max-width: 250px;
    position: absolute;
    top: 1rem;
    left: 5.25rem;
  }

  .illustration {
    max-width: 45%;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;