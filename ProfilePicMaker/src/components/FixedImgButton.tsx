import styled from 'styled-components';

interface ImgButton {
    imgsrc: string;
    onClick: (src: string) => void;
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
  &:hover{
    border: #72BF78 1px solid;
  }
  img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
  }
`;

export default function FixedImgButton({ imgsrc, onClick }: ImgButton) {

    return (
        <ImgButton onClick={() => onClick(imgsrc)}>
            <img src={imgsrc} />
        </ImgButton>
    );
}

