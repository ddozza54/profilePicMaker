interface ImgButton {
    imgsrc: string;
}

export default function FixedImgButton({ imgsrc }: ImgButton) {
    const onAddToCanvas = () => {
        console.log('click')
    }

    return (
        <button onClick={onAddToCanvas}>
            <img src={imgsrc} width={50} height={50} />
        </button>
    );
}

