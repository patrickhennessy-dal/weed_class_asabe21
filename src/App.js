import Header from './components/Header'
import Intro from './components/Intro'
import Classifier from './components/Classifier'
import Management from './components/Management'
import Acknowledgements from './components/Acknowledgements'
import Cite from './components/Cite'
import References from './components/References'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Classifier />
      <Management />
      <Acknowledgements />
      <Cite />
      <Disclaimer />
      <References />
      <Footer />
    </div>
  );
}

export default App;
