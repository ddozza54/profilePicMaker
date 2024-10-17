import styled from 'styled-components';
import DrawingImgButton from './DrawingImgButton';

interface ImgButtonCategory {
  imgPaths: string[];
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

export default function ImgButtons({ imgPaths }: ImgButtonCategory) {
  return (
    <Wrapper>
      <Buttons>
        {imgPaths.map((path, i) => (
          <DrawingImgButton key={i} imgsrc={path} />
        ))}
      </Buttons>
    </Wrapper>
  );
}
