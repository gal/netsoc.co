import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './views/About/About';
import Header from './components/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <>
      <Router>
        <header/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
