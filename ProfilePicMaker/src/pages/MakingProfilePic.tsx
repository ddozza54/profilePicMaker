import { useRecoilValue } from 'recoil';
import * as Paths from '../constant/imgPaths';
import * as S from '../styles/CanvasPage.styled';
import { useEffect, useRef, useState } from 'react';
import { profileItemsAtom, toolBarCategoryAtom } from '../atoms';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constant/constants';
import ToolBarButton from '../components/ToolBarButton';
import ImgButtonArray from '../components/ImgButtons';

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
        <ToolBarButton name="Character" category="character" />
        <ToolBarButton name="Desk" category="desk" />
        <ToolBarButton name="Laptop" category="laptop" />
        <ToolBarButton name="Drink" category="drink" />
      </S.ToolBar>
      <S.ButtonsBox>
        {toolBarCategory == 'character' && (
          <ImgButtonArray
            category={toolBarCategory}
            imgPaths={[Paths.QUOKKA_IMG_SRC, Paths.CHINCHILLA_IMG_SRC, Paths.BEAR_IMG_SRC, Paths.RABBIT_IMG_SRC]}
          />
        )}
        {toolBarCategory == 'desk' && (
          <ImgButtonArray category={toolBarCategory} imgPaths={[Paths.DESK1_IMG_SRC, Paths.DESK2_IMG_SRC, Paths.DESK3_IMG_SRC]} />
        )}
        {toolBarCategory == 'laptop' && <ImgButtonArray category={toolBarCategory} imgPaths={[Paths.LAPTOP1_IMG_SRC, Paths.LAPTOP2_IMG_SRC]} />}
        {toolBarCategory == 'drink' && <ImgButtonArray category={toolBarCategory} imgPaths={[Paths.DRINK1_IMG_SRC, Paths.DRINK2_IMG_SRC]} />}
      </S.ButtonsBox>
    </S.Wrapper>
  );
}
