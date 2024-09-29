import * as fabric from 'fabric';
import ImgButtonCategory from '../components/ImgButtonCategory';
import { BEAR_IMG_SRC, CHINCHILLA_IMG_SRC, DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC, DRINK1_IMG_SRC, DRINK2_IMG_SRC, LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC, QUOKKA_IMG_SRC, RABBIT_IMG_SRC } from '../constant/imgPaths';

export default function MakingProfilePic() {
    const canvas = new fabric.Canvas('c', {});

    return <>
        <canvas width="500" height="500" style={{ border: '1px solid green' }} />
        <ImgButtonCategory name='Characters' imgPaths={[QUOKKA_IMG_SRC, CHINCHILLA_IMG_SRC, BEAR_IMG_SRC, RABBIT_IMG_SRC]} />
        <ImgButtonCategory name='Desks' imgPaths={[DESK1_IMG_SRC, DESK2_IMG_SRC, DESK3_IMG_SRC]} />
        <ImgButtonCategory name='Laptops' imgPaths={[LAPTOP1_IMG_SRC, LAPTOP2_IMG_SRC]} />
        <ImgButtonCategory name='Drinks' imgPaths={[DRINK1_IMG_SRC, DRINK2_IMG_SRC]} />
    </>;
}