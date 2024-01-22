import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function Root(props) {
  return (
    <BrowserRouter basename="/react">
      {/* <section>{props.name} is mounted!</section> */}
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
