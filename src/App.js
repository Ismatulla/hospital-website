import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom'
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Services from "./components/services/Services";
function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}
export default App;
