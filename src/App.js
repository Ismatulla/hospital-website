import Header from "./frontend//components/header/Header";
import Home from "./frontend/components/home/Home";
import { Routes, Route } from 'react-router-dom'
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Services from "./frontend/components/services/Services";
import About from "./frontend/components/about/About";
import Book from "./frontend/components/book/Book";
import Reviews from "./frontend/components/review/Reviews";
import Blogs from "./frontend/components/blogs/Blogs";
import Doctors from "./frontend/components/doctors/Doctors";
import Footer from "./frontend/components/footer/Footer";
//import Statistics from "./frontend/components/statistics/Statistics";
function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book" element={<Book />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
