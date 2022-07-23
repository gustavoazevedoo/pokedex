import styled from 'styled-components';

export const Types = styled.span`
  display: block;
  width: 100%;
  max-width: 40%;
  text-align: center;
  text-transform: capitalize;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 2;

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
`;
