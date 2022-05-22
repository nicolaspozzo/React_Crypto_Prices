
import "./App.css";
// import 'bootswatch/dist/cyborg/bootstrap.css'
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import CoinChart from "./components/CoinChart/CoinChart";


function App() {
  


  return (    
      
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/error-page">Error Page</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin-chart/:coinName" element={<CoinChart />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>Footer</div>
      </Router>
      
  );
}

export default App;
