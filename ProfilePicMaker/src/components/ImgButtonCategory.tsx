import styled from 'styled-components';
import FixedImgButton from './FixedImgButton';

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
  h4 {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ImgButtonCategory({ name, clickFn, imgPaths }: ImgButtonCategory) {
  return (
    <Wrapper>
      <h4>{name}</h4>
      <Buttons>
        {imgPaths.map((path, i) => (
          <FixedImgButton onClick={() => clickFn(path)} key={i} imgsrc={path} />
        ))}
      </Buttons>
    </Wrapper>
  );
}
