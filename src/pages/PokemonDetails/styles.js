import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.25rem;
    color: var(--gray-800);
    font-weight: normal;
    text-transform: capitalize;
    margin-bottom: 1.5rem;

    & > span {
      color: var(--gray-400);
    }
  }

  & > div {
    display: grid;
    grid-template-columns: minmax(0, 450px) minmax(0, 500px);

    gap: 2rem;

    figure {
      background: var(--gray-100);
      border-radius: 5px;
      display: flex;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 680px) {
    & > div {
      grid-template-columns: 1fr;
    }
}
`;

export const Infos = styled.div`
  padding: 1rem;

  p {
    font-size: 1.125rem;
    line-height: 27px;
    color: var(--gray-800);
    margin-bottom: 2rem;
  }
`;

export const StatsContainer = styled.div`
  background-color: var(--blue-400);
  border-radius: 10px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2rem;
`;

export const Stat = styled.div`
  small {
    font-size: 1rem;
    color: var(--white);
    display: block;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--gray-800);
  }
`;

export const TypesContainer = styled.div`
  margin-top: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--gray-800);
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    gap: 5px;
  }
`;
