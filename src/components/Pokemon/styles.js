import styled from 'styled-components';

export const Container = styled.div`
  figure {
    background: #F2F2F2;
    border-radius: 5px;
    position: relative;
    display: block;

    a {
      display: flex;

      img {
        width: 100%;
      }
    }
  }

  .infos {
    margin-left: 1rem;

    & > span {
      display: block;
      color: var(--gray-300);
      font-weight: 500;
    }

    & > strong {
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 1.75rem;
      text-transform: capitalize;
      color: var(--gray-600);
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 5px;

    }
  }
`;
