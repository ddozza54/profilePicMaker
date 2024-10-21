import styled from 'styled-components';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constant/constants';

export const Wrapper = styled.div`
  width: 480px;
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const Canvas = styled.canvas`
  width: 100%;
  background-color: white;
  width: ${CANVAS_WIDTH};
  height: ${CANVAS_HEIGHT};
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ImgButtonArrayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px lightgray solid;
`;

export const ImgButton = styled.button`
  border-radius: 8px;
  border: transparent 1px solid;
  margin: 10px 2px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f8f7f7;
  cursor: pointer;
  &:hover {
    border: #72bf78 1px solid;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
  }
`;
