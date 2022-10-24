import { Link, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import Home from "./pages/Home"

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <li>
          <Link to="/">Popular movies</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default App
