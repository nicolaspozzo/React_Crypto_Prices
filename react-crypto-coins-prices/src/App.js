
import "./App.css";
// import 'bootswatch/dist/cyborg/bootstrap.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import CoinChart from "./components/CoinChart/CoinChart";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


function App() {
  


  return (    
      
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin-chart/:coinName" element={<CoinChart />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
        <Footer/>
      </Router>
      
  );
}

export default App;
