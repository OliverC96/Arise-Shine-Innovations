import TestimonialWrapper from "../pages/Testimonials/TestimonialWrapper";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Motivation from "../pages/Motivation/Motivation";
import Header from "./Header";
import Footer from "./Footer";
import Terms from "../pages/Terms/Terms";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function App() {
    const [themeColour, setThemeColour] = useState('#2AA1A7');

    return (
        <BrowserRouter>
            <Helmet>
                <meta name="theme-color" content={themeColour} />
            </Helmet>
            <Header setThemeColour={setThemeColour} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/mission" element={<Motivation/>}/>
                <Route path="/testimonials" element={<TestimonialWrapper/>}/>
                <Route path="/terms" element={<Terms />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}
