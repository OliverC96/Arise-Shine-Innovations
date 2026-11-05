import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function MobileNavOverlay({ closeNav, mobileNavOpen }) {
    return (
        <div className={`fixed h-full w-full justify-center items-center flex flex-col gap-6 bg-teal-dark text-white z-50 text-3xl transition-discrete duration-500 ease-in-out ${mobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <IoClose
                className="absolute top-5 right-5 hover:cursor-pointer"
                onClick={closeNav}
            />
            <Link
                className=""
                to="/"
                onClick={closeNav}
                target="_top"
            >
                Home
            </Link>
            <Link
                className=""
                to="/about"
                onClick={closeNav}
                target="_top"
            >
                Who We Are
            </Link>
            <Link
                className=""
                to="/services"
                onClick={closeNav}
                target="_top"
            >
                What We Do
            </Link>
            <Link
                className=""
                to="/mission"
                onClick={closeNav}
                target="_top"
            >
                Why We Do It
            </Link>
            <Link
                className=""
                to="/testimonials"
                onClick={closeNav}
                target="_top"
            >
                Testimonials
            </Link>
        </div>
    );
}