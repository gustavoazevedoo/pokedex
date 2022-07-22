import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

export const PokemonsList = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 2rem 1rem;

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
      color: var(--gray-600);
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 5px;

      & > span {
        display: block;
        background-color: yellow;
        width: 100%;
        max-width: 40%;
        text-align: center;
        text-transform: capitalize;
        border-radius: 4px;
        font-size: 0.875rem;

        &.grass {
          background: #9bcc50;
          color: #212121;
        }

        &.poison {
          background: #b97fc9;
          color: #fff;
        }

        &.fire {
          background: #fd7d24;
          color: #fff;
        }

        &.flying {
          background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
          background-color: #3dc7ef;
          color: #212121;
        }

        &.water {
          background-color: #4592c4;
          color: #fff;
        }

        &.bug {
          background-color: #729f3f;
          color: #fff;
        }

        &.normal {
          background-color: #a4acaf;
          color: #212121;
        }

        &.electric {
          background-color: #eed535;
          color: #212121;
        }

        &.ground {
          background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
          color: #212121;
        }

        &.fairy {
          background-color: #fdb9e9;
          color: #212121;
        }

        &.fighting {
          background-color: #d56723;
          color: #fff;
        }

        &.psychic {
          background-color: #f366b9;
          color: #fff;
        }

        &.rock {
          background-color: #a38c21;
          color: #fff;
        }

        &.steel {
          background-color: #9eb7b8;
          color: #212121;
        }

        &.ice {
          background-color: #51c4e7;
          color: #212121;
        }

        &.ghost {
          background-color: #7b62a3;
          color: #fff;
        }

        &.dragon {
          background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
          color: #fff;
        }

        &.dark {
          background-color: #707070;
          color: #fff;
        }
      }
    }
  }
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
  }

`;
