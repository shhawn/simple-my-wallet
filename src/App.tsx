import { styled } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const Button = styled.button`
  background: red;
`;

const Wrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrap>
      <Header />
      <Main />
    </Wrap>
  );
}

export default App;
