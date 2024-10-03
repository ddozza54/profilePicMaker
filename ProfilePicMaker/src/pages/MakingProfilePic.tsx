import * as fabric from 'fabric';
import ImgButtonCategory from '../components/ImgButtonCategory';
import { BEAR_IMG_SRC, CHINCHILLA_IMG_SRC, DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC, DRINK1_IMG_SRC, DRINK2_IMG_SRC, LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC, QUOKKA_IMG_SRC, RABBIT_IMG_SRC } from '../constant/imgPaths';
import { useEffect, useRef, useState } from 'react';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

export default function MakingProfilePic() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [context, setContext] = useState<CanvasRenderingContext2D>();

    const onClickText = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        const image = new Image();
        console.log(e.target)
        image.src = QUOKKA_IMG_SRC;
        ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx && setContext(ctx);
    }
    return <>
        <canvas ref={canvasRef} style={{ border: '1px solid green' }} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
        <button onClick={onClickText}>
            <img width={100} src={QUOKKA_IMG_SRC} />Hello</button>
        <ImgButtonCategory name='Characters' imgPaths={[QUOKKA_IMG_SRC, CHINCHILLA_IMG_SRC, BEAR_IMG_SRC, RABBIT_IMG_SRC]} />
        <ImgButtonCategory name='Desks' imgPaths={[DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC]} />
        <ImgButtonCategory name='Laptops' imgPaths={[LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC]} />
        <ImgButtonCategory name='Drinks' imgPaths={[DRINK1_IMG_SRC, DRINK2_IMG_SRC]} />
    </>;
}