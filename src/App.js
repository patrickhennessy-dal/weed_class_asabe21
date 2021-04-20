import Header from './components/Header'
import Intro from './components/Intro'
import Classifier from './components/Classifier'
import Acknowledgements from './components/Acknowledgements'

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Classifier />
      {/*<Samples />*/}
      {/*<Management />*/}
      <Acknowledgements />
      {/*<Footer />*/}
    </div>
  );
}

export default App;
