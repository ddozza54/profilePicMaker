import { Canvas } from 'fabric';

interface ImgButton {
    imgsrc: string;
}

export default function FixedImgButton({ imgsrc }: ImgButton) {
    const onAddToCanvas = () => {
const image = new Image();
image.src = imgsrc;

    }

    return (
        <button onClick={onAddToCanvas}>
            <img src={imgsrc} width={50} height={50} />
        </button>
    );
}

