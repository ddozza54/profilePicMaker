import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { clickedImgButtonSrcAtom } from '../atoms';

interface ImgButton {
  imgsrc: string;
}

const ImgButton = styled.button`
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

export default function DrawingImgButton({ imgsrc }: ImgButton) {
  const setclickedImgButtonSrc = useSetRecoilState(clickedImgButtonSrcAtom);

  return (
    <ImgButton onClick={() => setclickedImgButtonSrc(imgsrc)}>
      <img src={imgsrc} />
    </ImgButton>
  );
}
