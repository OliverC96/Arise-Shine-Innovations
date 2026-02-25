import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import useScroll from "../hooks/use-scroll";
import useNavigation from "../hooks/use-navigation";
import MobileNavOverlay from "../components/MobileNavOverlay";

export default function Header() {

    const scrolled = useScroll();
    const {
        showMobileNav,
        mobileNavOpen,
        setMobileNavOpen,
    } = useNavigation();

    return (
        <>
            <MobileNavOverlay
                mobileNavOpen={mobileNavOpen}
                closeNav={() => setMobileNavOpen(false)}
            />
            <div
                className={`${scrolled ? 'bg-white' : 'bg-teal-dark'} ${scrolled ? 'text-gray-800' : 'text-white'} flex justify-between items-center h-[9vh] px-6 font-body text-lg lg:text-xl sticky top-0 z-20 transition-all duration-200 ease-in`}
            >
                <Link
                    className="hover:cursor-pointer"
                    to="/"
                >
                    Arise & Shine Innovation
                </Link>
                {showMobileNav
                    ?
                    <IoMenu
                        className="hover:cursor-pointer size-7"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    />
                    :
                    <div className="flex gap-8">
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
                }
            </div>
        </>
    );

}