import { Dial } from './components/common/Dial';
import { Layout } from './components/common/Layout';
import { Navbar } from './components/common/NavBar';
import { Router } from './routes/Router';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

export const App = () => {
  return (
    <>
      <Layout>
        <>
          <ScrollToTop />
          <Navbar />
          <Router />
          <Dial />
        </>
      </Layout>
      <Footer />
    </>
  );
};
