import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sucess from "./pages/Sucess";


const App = () => {
  return <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>;
  
};

export default App
