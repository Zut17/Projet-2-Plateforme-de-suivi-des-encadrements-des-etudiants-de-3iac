// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import du Tableau de Bord
import TableauDeBord from './pagesAdmin/tableaudebord.jsx'; // CORRECTION : Chemin corrigé

// Composants temporaires pour tester
const Login = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Page de Connexion</h1>
    <p>Cette page est en cours de développement</p>
    <a href="/admin/dashboard">Aller au Tableau de Bord</a>
  </div>
);

const AdminLayout = ({ children }) => (
  <div>
    <nav style={{ padding: '10px', background: '#1976d2', color: 'white' }}>
      <h2>Admin Panel</h2>
    </nav>
    <div style={{ padding: '20px' }}>
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Route par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Page de connexion */}
        <Route path="/login" element={<Login />} />
        
        {/* ✅ CORRECTION : Route directe vers tableau de bord */}
        <Route path="/admin/dashboard" element={<TableauDeBord />} />
        
        {/* ✅ CORRECTION : Route avec layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<TableauDeBord />} />
        </Route>
        
        {/* Route 404 */}
        <Route path="*" element={<div style={{ padding: '20px' }}>404 - Page non trouvée</div>} />
      </Routes>
    </Router>
  );
}

export default App;