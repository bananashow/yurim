import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { HomeInterior } from '../pages/HomeInterior';
import { StoreInterior } from '../pages/StoreInterior';
import { PartialDesign } from '../pages/PartialDesign';
import { Story } from '../pages/Story';
import { Contact } from '../pages/Contact';
import { SignIn } from '../pages/SignIn';
import { useRecoilValue } from 'recoil';
import { signedInState } from '../store/common';
import { Admin } from '../pages/Admin';

export const Router = () => {
  const isSignedIn = useRecoilValue(signedInState);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<HomeInterior />} />
      <Route path="/store" element={<StoreInterior />} />
      <Route path="/partial-design" element={<PartialDesign />} />
      <Route path="/story" element={<Story />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={isSignedIn ? <Admin /> : <SignIn />} />
    </Routes>
  );
};
