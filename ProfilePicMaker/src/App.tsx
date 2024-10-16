import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { RecoilRoot } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color:#ddfcac ;
    display: flex;
    justify-content: center;
    font-family: "Poor Story", system-ui;
    color: #484a4b;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
