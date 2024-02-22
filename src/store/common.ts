import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const menuState = atom({
  key: 'menuStateAtom',
  default: '홈',
  effects_UNSTABLE: [persistAtom],
});
