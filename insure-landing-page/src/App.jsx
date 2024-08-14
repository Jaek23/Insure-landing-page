import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/ui/Navigation';
import Hero from './components/hero/Hero';
import Information from './components/info/Information';
import Footer from './components/ui/Footer';

function App() {

  return (
    <>
      <Navigation/>
      <Hero/>
      <Information/>
      <Footer/>
    </>
  )
}

export default App
