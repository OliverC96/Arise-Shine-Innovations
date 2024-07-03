import Header from "./Partials/Header";
import Banner from "./Home/Banner";
import Footer from "./Partials/Footer";
import Motivation from "./Home/Motivation";
import Mission from "./Home/Mission";
import Background from "./Home/Background";
import Definition from "./Home/Definition";
import TestimonialWrapper from "./Home/TestimonialWrapper";

export default function App() {
  return (
      <div>
          <Header />
          <Banner imageFilePath="./logo.png" />
          <Motivation />
          <Mission />
          <Background />
          <TestimonialWrapper />
          <Definition />
          <Footer author="H6 Life Coaching Inc." />
      </div>
  );
}
