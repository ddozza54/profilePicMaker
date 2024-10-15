import * as fabric from 'fabric';
import ImgButtonCategory from '../components/ImgButtonCategory';
import { BEAR_IMG_SRC, CHINCHILLA_IMG_SRC, DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC, DRINK1_IMG_SRC, DRINK2_IMG_SRC, LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC, QUOKKA_IMG_SRC, RABBIT_IMG_SRC } from '../constant/imgPaths';
import { useEffect, useRef, useState } from 'react';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

export default function MakingProfilePic() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [context, setContext] = useState<CanvasRenderingContext2D>();

    const onClickImgBtn = (imgSrc: string) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        const image = new Image();
        image.src = imgSrc;
        ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx && setContext(ctx);
    }
    return <>
        <canvas ref={canvasRef} style={{ border: '1px solid green' }} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
        <button onClick={() => onClickImgBtn(QUOKKA_IMG_SRC)}>
            <img width={100} src={QUOKKA_IMG_SRC} /></button>
        <button onClick={() => onClickImgBtn}>
            <img width={100} src={RABBIT_IMG_SRC} /></button>
        <ImgButtonCategory name='Characters' clickFn={onClickImgBtn} imgPaths={[QUOKKA_IMG_SRC, CHINCHILLA_IMG_SRC, BEAR_IMG_SRC, RABBIT_IMG_SRC]} />
        <ImgButtonCategory name='Desks' clickFn={onClickImgBtn} imgPaths={[DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC]} />
        <ImgButtonCategory name='Laptops' clickFn={onClickImgBtn} imgPaths={[LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC]} />
        <ImgButtonCategory name='Drinks' clickFn={onClickImgBtn} imgPaths={[DRINK1_IMG_SRC, DRINK2_IMG_SRC]} />
    </>;
}