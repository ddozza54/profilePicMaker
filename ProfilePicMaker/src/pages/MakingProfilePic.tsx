import * as fabric from 'fabric';
import FixedImgButton from '../components/FixedImgButton';
import ImgButtonCategory from '../components/ImgButtonCategory';

export default function MakingProfilePic() {
    const canvas = new fabric.Canvas('c', {});
    const quokkaImgSrc = 'public/imgs/character/quokka.PNG';
    const bearImgSrc = 'public/imgs/character/bear.PNG';
    const rabbitImgSrc = 'public/imgs/character/rabbit.PNG';
    const chinchillaImgSrc = 'public/imgs/character/chinchilla.PNG';
    const desk1Src = 'public/imgs/desk/desk_1.PNG';
    const desk2Src = 'public/imgs/desk/desk_2.PNG';
    const desk3Src = 'public/imgs/desk/desk_3.PNG';
    const drink1Src = 'public/imgs/drink/drink_1.PNG';
    const drink2Src = 'public/imgs/drink/drink_2.PNG';
    const laptop1Src = 'public/imgs/laptop/laptop_1.PNG';
    const laptop2Src = 'public/imgs/laptop/laptop_2.PNG';


    return <>
        <canvas width="500" height="500" style={{ border: '1px solid green' }} />
        <ImgButtonCategory name='Characterse' imgPaths={[quokkaImgSrc, chinchillaImgSrc, bearImgSrc, rabbitImgSrc]} />
        <ImgButtonCategory name='Desks' imgPaths={[desk1Src, desk2Src, desk3Src]} />
        <ImgButtonCategory name='Laptops' imgPaths={[laptop1Src, laptop2Src]} />
        <ImgButtonCategory name='Drinks' imgPaths={[drink1Src, drink2Src]} />
    </>;
}