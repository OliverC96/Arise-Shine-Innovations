import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Motivation from "./Home/Motivation";
import Mission from "./Home/Mission";
import Background from "./Home/Background";
import TestimonialWrapper from "./Home/TestimonialWrapper";

export default function App() {
  return (
      <div>
          <Header />
          <img src="logo_banner.png" alt="logo" className="w-screen" />
          <Motivation />
          <Mission />
          <Background />
          <TestimonialWrapper />
          <Footer author="H6 Life Coaching Inc."/>
      </div>
  );
}
