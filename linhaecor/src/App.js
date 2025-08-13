  import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Atendimento from './pages/Atendimento';
import SobreNos from './pages/SobreNos';
import Parceiros from './pages/Parceiros';
import Produtos from './pages/Produtos';
import Ofertas from './pages/Ofertas';
import Cadastro from './pages/Cadastro';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <header>
          <Header/>
        </header>

        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Atendimento" element={<Atendimento />} />
              <Route path="/Sobre-Nos" element={<SobreNos />} />
              <Route path="/Parceiros" element={<Parceiros />} />
              <Route path="/Produtos" element={<Produtos />} />
              <Route path="/Ofertas" element={<Ofertas />} />
              <Route path="/Cadastro" element={<Cadastro />} />
          </Routes>
        </main>

        <footer>
          <Footer/>
        </footer>
    </Router>
  );
}

export default App;
