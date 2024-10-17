import { atom } from 'recoil';

export const toolBarCategoryAtom = atom({
  key: 'categoryState',
  default: 'character',
});

export const clickedImgButtonSrcAtom = atom({
  key: 'clickedImgButtonSrc',
  default: '',
});
