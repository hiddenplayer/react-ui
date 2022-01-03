import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Technics } from './components/technics/Technics';
import { GPT } from './components/gpt/GPT';

function App() {
  return (
    <div className="gradient-bg">
      <Navbar/>
      <Header/>
      <Technics/>
      <GPT/>
    </div>
  );
}

export default App;
