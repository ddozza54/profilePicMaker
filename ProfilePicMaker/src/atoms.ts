import { atom } from 'recoil';
import { DESK3_IMG_SRC, DRINK1_IMG_SRC, LAPTOP1_IMG_SRC, QUOKKA_IMG_SRC } from './constant/imgPaths';

export const toolBarCategoryAtom = atom({
  key: 'categoryState',
  default: 'character',
});

export const profileItemsAtom = atom({
  key: 'profileItems',
  default: {
    character: QUOKKA_IMG_SRC,
    desk: DESK3_IMG_SRC,
    laptop: LAPTOP1_IMG_SRC,
    drink: DRINK1_IMG_SRC,
  },
});
