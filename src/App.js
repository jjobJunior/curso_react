import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/newproject">New Project</Link>
      </div>
        <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Company" element={<Company />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="Newproject" element={<NewProject />} />
      </Routes>
        </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
