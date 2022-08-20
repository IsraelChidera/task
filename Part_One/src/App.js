import './App.css';
import Container from './components/ui/Container';
import Blog from './components/widget/Blog';
import CurrentMenu from './components/widget/CurrentMenu';
import Footer from './components/widget/Footer';
import Header from './components/widget/Header';
import Navbar from './components/widget/Navbar';
import Testimonial from './components/widget/Testimonial';

function App() {
  return (
    <div className="App">

      <div>
        <Navbar/>
        <Header/>
        <CurrentMenu/>
        <Testimonial/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
