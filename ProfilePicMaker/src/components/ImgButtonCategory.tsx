interface ImgButtonCategory {
    name: string;
    imgPaths: string[];
    clickFn: (imgPaths: string) => void;
}

import FixedImgButton from './FixedImgButton';

export default function ImgButtonCategory({ name, clickFn, imgPaths }: ImgButtonCategory) {
    return (
        <div>
            <h3>{name}</h3>
            {imgPaths.map((path, i) => <FixedImgButton onClick={() => clickFn(path)} key={i} imgsrc={path} />)}
        </div>
    );
}

