import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Technics } from './components/technics/Technics';
import { GPT } from './components/gpt/GPT';
import { Blog } from './components/blog/Blog';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="gradient-bg">
      <Navbar/>
      <Header/>
      <Technics/>
      <GPT/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
