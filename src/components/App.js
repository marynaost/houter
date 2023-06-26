import 'modern-normalize/modern-normalize.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
