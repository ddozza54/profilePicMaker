import * as fabric from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { RABBIT_IMG_SRC } from '../constant/imgPaths';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

export default function FabricPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    useEffect(() => {
        const canvasInstance = new fabric.Canvas(canvasRef.current!, {
            width: 500,
            height: 500,
            backgroundColor: 'black'
        });
        setCanvas(canvasInstance);
        return () => {
            canvasInstance.dispose();
        }
    }, [])
    const onClickText = () => {
        // fabric.FabricImage.fromURL(RABBIT_IMG_SRC, (img) => {
        //     const newImg = img.set({ selectable: true });
        //     canvas?.add(newImg);
        //     canvas?.renderAll();
        // });
    }

    return (<>
        <canvas ref={canvasRef} />
        <button onClick={onClickText}>
            <img width={100} src={RABBIT_IMG_SRC} /></button>
    </>
    );
}

