import { useRecoilValue } from 'recoil';
import * as S from '../styles/CanvasPage.styled';
import { useEffect, useRef, useState } from 'react';
import { profileItemsAtom, toolBarCategoryAtom } from '../atoms';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constant/constants';
import ToolBarButton from '../components/ToolBarButton';
import ImgButtonArray from '../components/ImgButtons';
import { imgBtnCategory } from '../ImgCategory';

interface drawingImgs {
  ctx: CanvasRenderingContext2D | null | undefined;
  itmes: string;
}

export default function MakingProfilePic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const toolBarCategory = useRecoilValue(toolBarCategoryAtom);

  const profileItems = useRecoilValue(profileItemsAtom);

  const drawingImgs = ({ ctx, itmes }: drawingImgs) => {
    const image = new Image();
    image.src = itmes;
    ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.beginPath();
    if (ctx) ctx.fillStyle = 'white';
    ctx?.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    Object.values(profileItems).map((itmes) => drawingImgs({ ctx, itmes }));
    ctx && setContext(ctx);
    console.log('profileItme 바뀜', profileItems);
  }, [profileItems]);

  return (
    <S.Wrapper>
      <S.Canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      <S.ToolBar>
        {imgBtnCategory.map((obj) => (
          <ToolBarButton name={obj.name} category={obj.category} />
        ))}
      </S.ToolBar>
      <S.ButtonsBox>
        {imgBtnCategory.map((obj) => toolBarCategory == obj.category && <ImgButtonArray category={obj.category} imgPaths={obj.imgPaths} />)}
      </S.ButtonsBox>
    </S.Wrapper>
  );
}
