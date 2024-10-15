interface ImgButton {
    imgsrc: string;
    onClick: (src: string) => void;
}

export default function FixedImgButton({ imgsrc, onClick }: ImgButton) {

    return (
        <button onClick={() => onClick(imgsrc)}>
            <img src={imgsrc} width={50} height={50} />
        </button>
    );
}

