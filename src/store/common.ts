import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const menuState = atom<string>({
  key: 'menuStateAtom',
  default: '홈',
  effects_UNSTABLE: [persistAtom],
});

export const signedInState = atom<boolean>({
  key: 'inSignedInAtom',
  default: !!sessionStorage.getItem('access_token'),
});
