import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import useScroll from "../hooks/use-scroll";
import useNavigation from "../hooks/use-navigation";
import MobileNavOverlay from "../components/MobileNavOverlay";

export default function Header({ setThemeColour }) {

    const scrolled = useScroll();
    const {
        showMobileNav,
        mobileNavOpen,
        setMobileNavOpen,
    } = useNavigation({ setThemeColour });

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
                    target="_top"
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
                            target="_top"
                        >
                            Who We Are
                        </Link>
                        <Link
                            className="hover:underline"
                            to="/services"
                            target="_top"
                        >
                            What We Do
                        </Link>
                        <Link
                            className="hover:underline"
                            to="/mission"
                            target="_top"
                        >
                            Why We Do It
                        </Link>
                        <Link
                            className="hover:underline"
                            to="/testimonials"
                            target="_top"
                        >
                            Testimonials
                        </Link>
                    </div>
                }
            </div>
        </>
    );

}