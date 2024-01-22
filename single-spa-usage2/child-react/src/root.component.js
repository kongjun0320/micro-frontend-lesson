import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default function Root(props) {
  console.log('props >>> ', props);
  return (
    <BrowserRouter basename="/react">
      <div>
        <Link to="/">Home</Link>
        <style style={{ margin: '0 10px' }}>|</style>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
