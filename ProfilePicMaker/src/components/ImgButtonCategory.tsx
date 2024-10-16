import styled from 'styled-components';
import DrawingImgButton from './FixedImgButton';

interface ImgButtonCategory {
  name: string;
  imgPaths: string[];
  clickFn: (imgPaths: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom: 1px lightgray solid;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ImgButtonCategory({ clickFn, imgPaths }: ImgButtonCategory) {
  return (
    <Wrapper>
      <Buttons>
        {imgPaths.map((path, i) => (
          <DrawingImgButton onClick={() => clickFn(path)} key={i} imgsrc={path} />
        ))}
      </Buttons>
    </Wrapper>
  );
}
