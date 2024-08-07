import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/ui/Navigation';
import Hero from './components/hero/Hero';
import Information from './components/info/Information';

function App() {

  return (
    <>
      <Navigation/>
      <Hero/>
      <Information/>
    </>
  )
}

export default App
