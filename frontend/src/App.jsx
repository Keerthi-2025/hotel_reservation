import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/home';
import NotFound from './pages/notfound';
import Success from './pages/success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Success />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
