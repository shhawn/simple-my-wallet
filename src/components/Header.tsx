import { styled } from 'styled-components';

const Wrap = styled.header`
  background: #ddd;
  padding: 3rem;
  font-size: 2.5rem;
`;

const CurrentMoney = styled.h1`
  background: #aaa;
  padding: 1.5rem;
  text-align: right;
`;

const Header = () => {
  return (
    <Wrap>
      <CurrentMoney>10,000,000원</CurrentMoney>
    </Wrap>
  );
};

export default Header;
