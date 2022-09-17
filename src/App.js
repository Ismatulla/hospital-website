import Header from "./frontend/pages/header/Header";
import Home from "./frontend/pages/home/Home";
import { Routes, Route } from 'react-router-dom'
import '/node_modules/slick-carousel/slick/slick.css'
import '/node_modules/slick-carousel/slick/slick-theme.css'
import Services from "./frontend/pages/services/Services";
import About from "./frontend/pages/about/About";
import Book from "./frontend/pages/book/Book";
import Reviews from "./frontend/pages/review/Reviews";
import Blogs from "./frontend/pages/blogs/Blogs";
import Doctors from "./frontend/pages/doctors/Doctors";
import Footer from "./frontend/pages/footer/Footer";
import AddReview from "./frontend/pages/review/AddReview";
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
        <Route path="/addReview" element={<AddReview />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
