import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 0);
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`${scrolled ? 'bg-green-xdark' : 'bg-green-dark'} ${scrolled ? 'text-gold' : 'text-gold'} flex justify-between items-center h-[10vh] px-6 font-body text-lg sticky top-0 z-50 transition-all duration-200 ease-in`}
        >
            <Link
                className="hover:cursor-pointer"
                to="/"
            >
                <img
                    src="./logo.PNG"
                    alt="Arise & Shine Innovation Logo"
                    className="h-[8vh]"
                />
            </Link>
            <div className="flex gap-7">
                <Link
                    className="hover:underline"
                    to="/about"
                >
                    Who We Are
                </Link>
                <Link
                    className="hover:underline"
                    to="/services"
                >
                    What We Do
                </Link>
                <Link
                    className="hover:underline"
                    to="/mission"
                >
                    Why We Do It
                </Link>
                <Link
                    className="hover:underline"
                    to="/testimonials"
                >
                    Testimonials
                </Link>
            </div>
        </div>
    );

}