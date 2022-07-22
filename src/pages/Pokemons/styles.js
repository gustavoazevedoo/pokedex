import styled from 'styled-components';

export const PokemonsList = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 2rem 1rem;

`;

export const LoadMoreContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 50px;
    padding: 0 4rem;
    border: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
    background-color: var(--blue-400);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color .2s;

    &:hover {
      background-color: var(--blue-500);
    }

    &:disabled {
      background-color: var(--gray-300);
      cursor: not-allowed;
    }
  }

`;
