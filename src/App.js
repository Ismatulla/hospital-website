import Header from "./frontend//components/header/Header";
import Home from "./frontend/components/home/Home";
import { Routes, Route } from 'react-router-dom'
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Services from "./frontend/components/services/Services";
import Statistics from "./frontend/components/statistics/Statistics";
function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<><Services /><Statistics /></>} />
      </Routes>
    </div>
  );
}
export default App;
