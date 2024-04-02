
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
/* import Main from "./pages/Main"; */
import Store from "./pages/Store";
import Login from "./pages/Login";
import VerticalScrollBar from "./components/VerticalScrollBar";
function App() {

  return (
    <div className="App">
      <VerticalScrollBar />
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
