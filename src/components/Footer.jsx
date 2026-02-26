import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

export default function Footer(props) {
    const currYear = new Date().getFullYear();
    return (
        <div className="bg-berry-dark text-white">
            <svg viewBox="0 0 500 200" className="fill-berry-dark bg-cream rotate-180">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"></path>
            </svg>
            <div className="flex flex-col w-screen items-center bg-berry-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-berry-dark gap-10 px-6 sm:px-24 md:px-32 xl:px-80">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h1 className="text-xl lg:text-2xl font-bold"> Arise & Shine Innovation </h1>
                        <p className="text-md lg:text-lg"> Led by two complementary specialists—one in education systems and one in patriarchal systems—Arise & Shine offers a rapid, prevention-focused approach to mental health transformation. Together, we bring a systems-level understanding of how institutional structures, intergenerational trauma, and disconnection impact youth, families, and educators. </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 text-lg lg:text-xl lg:justify-self-end">
                        <Link
                            className="flex gap-1 items-center hover:underline"
                            to="/about"
                            target="_top"
                        >
                            Who We Are
                            <IoArrowForward className="text-xl" />
                        </Link>
                        <Link
                            className="flex gap-1 items-center hover:underline"
                            to="/services"
                            target="_top"
                        >
                            What We Do
                            <IoArrowForward className="text-xl" />
                        </Link>
                        <Link
                            className="flex gap-1 items-center hover:underline"
                            to="/mission"
                            target="_top"
                        >
                            Why We Do It
                            <IoArrowForward className="text-xl" />
                        </Link>
                        <Link
                            className="flex gap-1 items-center hover:underline"
                            to="/testimonials"
                            target="_top"
                        >
                            Testimonials
                            <IoArrowForward className="text-xl" />
                        </Link>
                    </div>
                </div>
                <footer className="text-md lg:text-lg py-10"> ⓒ {currYear} Arise & Shine Innovation Inc.</footer>
            </div>
        </div>
    );
}