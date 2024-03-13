import { Dial } from './components/common/Dial';
import { Layout } from './components/common/Layout';
import { Navbar } from './components/common/NavBar';
import { Router } from './routes/Router';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <>
      <Layout>
        <>
          <Navbar />
          <Router />
          <Dial />
        </>
      </Layout>
      <Footer />
    </>
  );
};
