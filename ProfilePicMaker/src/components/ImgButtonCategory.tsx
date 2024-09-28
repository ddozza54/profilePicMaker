interface ImgButtonCategory {
    name: string;
    imgPaths: string[];
}

import FixedImgButton from './FixedImgButton';

export default function ImgButtonCategory({ name, imgPaths }: ImgButtonCategory) {
    return (
        <div>
            <h3>{name}</h3>
            {imgPaths.map((path, i) => <FixedImgButton key={i} imgsrc={path} />)}
        </div>
    );
}

