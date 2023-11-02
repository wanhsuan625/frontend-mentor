import Header from '../src/components/Header';
import Showcase from '../src/components/Showcase';
import Tabs from '../src/components/Tabs';
import Download from '../src/components/Download';
import FQA from './components/FQA';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Header />
      <Showcase />
      <Tabs />
      <Download />
      <FQA />
      <CTA />
      <Footer />
    </>
  );
}

export default App;