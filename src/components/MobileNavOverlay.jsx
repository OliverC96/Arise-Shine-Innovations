import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function MobileNavOverlay({ closeNav, mobileNavOpen }) {
    return (
        <div className={`fixed h-full w-full justify-center items-center flex flex-col gap-8 bg-blue-dark text-white z-50 text-4xl transition-discrete duration-500 ease-in-out ${mobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <IoClose
                className="absolute top-5 right-5 hover:cursor-pointer"
                onClick={closeNav}
            />
            <Link
                className=""
                to="/"
            >
                Home
            </Link>
            <Link
                className=""
                to="/about"
            >
                Who We Are
            </Link>
            <Link
                className=""
                to="/services"
            >
                What We Do
            </Link>
            <Link
                className=""
                to="/mission"
            >
                Why We Do It
            </Link>
            <Link
                className=""
                to="/testimonials"
            >
                Testimonials
            </Link>
        </div>
    );
}