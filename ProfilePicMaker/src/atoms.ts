import { atom } from 'recoil';

export const toolBarCategoryAtom = atom({
  key: 'categoryState',
  default: 'character',
});
