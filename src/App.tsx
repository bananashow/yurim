import { Layout } from './components/common/Layout';
import { Navbar } from './components/common/NavBar';
import { Router } from './components/common/Router';

export const App = () => {
  return (
    <Layout>
      <>
        <Navbar />
        <Router />
      </>
    </Layout>
  );
};
