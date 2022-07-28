import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(209, 209, 209, 0.5);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pokeballSpin 1s ease infinite;

  img {
    width: 250px;
    height: 250px;
  }

  @keyframes pokeballSpin {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`;
