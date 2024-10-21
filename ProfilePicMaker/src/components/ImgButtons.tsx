import { ImgButtonArrayBox } from '../styles/CanvasPage.styled';
import DrawingImgButton from './DrawingImgButton';

interface ImgButtonCategory {
  imgPaths: string[];
  category: string;
}

export default function ImgButtonArray({ imgPaths, category }: ImgButtonCategory) {
  return (
    <ImgButtonArrayBox>
      {imgPaths.map((path, i) => (
        <DrawingImgButton key={i} imgsrc={path} category={category} />
      ))}
    </ImgButtonArrayBox>
  );
}
