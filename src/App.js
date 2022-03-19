import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Footer />
      </Router>
    </>
  );
}
export default App;
