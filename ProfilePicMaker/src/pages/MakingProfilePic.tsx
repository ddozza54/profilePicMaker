import { useRecoilValue } from 'recoil';
import ToolBarButton from '../components/ToolBarButton';
import {
  BEAR_IMG_SRC,
  CHINCHILLA_IMG_SRC,
  DESK1_IMG_SRC,
  DESK2_IMG_SRC,
  DESK3_IMG_SRC,
  DRINK1_IMG_SRC,
  DRINK2_IMG_SRC,
  LAPTOP1_IMG_SRC,
  LAPTOP2_IMG_SRC,
  QUOKKA_IMG_SRC,
  RABBIT_IMG_SRC,
} from '../constant/imgPaths';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { clickedImgButtonSrcAtom, toolBarCategoryAtom } from '../atoms';
import ImgButtons from '../components/ImgButtonCategory';

interface ImgBtnClick {
  imgSrc: string;
  category: string;
}

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

const Wrapper = styled.div`
  width: 480px;
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const Canvas = styled.canvas`
  width: 100%;
  background-color: white;
  width: ${CANVAS_WIDTH};
  height: ${CANVAS_HEIGHT};
`;

const ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Buttons = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export default function MakingProfilePic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const toolBarCategory = useRecoilValue(toolBarCategoryAtom);
  const clickedImgButtonSrc = useRecoilValue(clickedImgButtonSrcAtom);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = new Image();
    image.src = clickedImgButtonSrc;
    ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx && setContext(ctx);
  }, [clickedImgButtonSrc]);

  return (
    <Wrapper>
      <Canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      <ToolBar>
        <ToolBarButton name="Character" category="character" />
        <ToolBarButton name="Desk" category="desk" />
        <ToolBarButton name="Laptop" category="laptop" />
        <ToolBarButton name="Drink" category="drink" />
      </ToolBar>
      <Buttons>
        {toolBarCategory == 'character' && <ImgButtons imgPaths={[QUOKKA_IMG_SRC, CHINCHILLA_IMG_SRC, BEAR_IMG_SRC, RABBIT_IMG_SRC]} />}
        {toolBarCategory == 'desk' && <ImgButtons imgPaths={[DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC]} />}
        {toolBarCategory == 'laptop' && <ImgButtons imgPaths={[LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC]} />}
        {toolBarCategory == 'drink' && <ImgButtons imgPaths={[DRINK1_IMG_SRC, DRINK2_IMG_SRC]} />}
      </Buttons>
    </Wrapper>
  );
}
