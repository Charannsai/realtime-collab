import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DocumentEditor from './components/editor/DocumentEditor';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/document/:id" element={<DocumentEditor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;