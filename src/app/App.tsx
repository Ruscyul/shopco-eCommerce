import Layout from '../shared/ui/layout/Layout';
import Footer from '../widgets/footer/Footer';
import Header from '../widgets/header/Header';

function App() {
  return (
    <>
      <Layout header={<Header />} footer={<Footer />} />
    </>
  );
}

export default App;
