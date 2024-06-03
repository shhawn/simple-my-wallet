import { styled } from "styled-components";

const Wrap = styled.main`
  background: #eee;
  height: calc(100vh - 11.5rem);
  padding: 3rem;
`;

const Main = () => {
  return (
    <Wrap>
      <ul>
        <li>
          <span>24/06/03</span>

        </li>
      </ul>
    </Wrap>
  )
}

export default Main;