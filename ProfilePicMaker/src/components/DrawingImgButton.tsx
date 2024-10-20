import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { profileItemsAtom } from '../atoms';

interface ImgButton {
  imgsrc: string;
  category: string;
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

export default function DrawingImgButton({ imgsrc, category }: ImgButton) {
  const [profileItems, setProfileItems] = useRecoilState(profileItemsAtom);

  const onClick = () => {
    setProfileItems({ ...profileItems, [category]: imgsrc });
    console.log('click!');
  };
  return (
    <ImgButton onClick={onClick}>
      <img src={imgsrc} />
    </ImgButton>
  );
}
