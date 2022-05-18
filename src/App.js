import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contato from './components/pages/Contato'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
