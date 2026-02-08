import TestimonialWrapper from "../pages/Testimonials/TestimonialWrapper";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Motivation from "../pages/Motivation/Motivation";
import Header from "./Header";
import Footer from "./Footer";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
          <div className="bg-[url(/public/wisdom_circle.jpg)] absolute" />
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/mission" element={<Motivation />} />
              <Route path="/testimonials" element={<TestimonialWrapper />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}
