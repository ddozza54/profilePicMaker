import { useRecoilState } from 'recoil';
import { profileItemsAtom } from '../atoms';
import { ImgButton } from '../styles/CanvasPage.styled';

interface ImgButton {
  imgsrc: string;
  category: string;
}

export default function DrawingImgButton({ imgsrc, category }: ImgButton) {
  const [profileItems, setProfileItems] = useRecoilState(profileItemsAtom);

  const onClick = () => {
    setProfileItems({ ...profileItems, [category]: imgsrc });
  };
  return (
    <ImgButton onClick={onClick}>
      <img src={imgsrc} />
    </ImgButton>
  );
}
