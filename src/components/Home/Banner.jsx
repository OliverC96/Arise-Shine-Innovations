import { FaDownload } from "react-icons/fa6";

export default function Banner(props) {
    return (
        <div className="h-[90vh] bg-logo-primary flex flex-col justify-center items-center">
            <div className="mb-[10vh] flex flex-col md:flex-row justify-center items-center gap-7 lg:gap-4 w-4/6">
                <img
                    src={props.imageFilePath}
                    alt="H6 logo banner with the H6 tagline: 'From Hitler to Homeniuk:  Hurdling Hypocrisy in Search of Hope for HUMANITY.'"
                    className="w-1/2 md:w-[22%] lg:hover:rotate-45 transition duration-500"
                />
                <p className="text-med sm:text-lg text-gold font-tagline tracking-wide text-center">
                    From Hitler to Homeniuk:  Hurdling Hypocrisy in Search of Hope for HUMANITY.
                </p>
            </div>
            <a
                href="Manifesto of Love and Peace.docx"
                download
                className="mx-10 text-center absolute bottom-[7vh] flex gap-2 items-center border-2 border-gold rounded-md px-3 py-2 text-gold lg:text-lg hover:text-green-dark hover:bg-gold transition-all duration-300">
                My Autobiographical Manifesto of “Love and Peace”
                <FaDownload className="text-lg shrink-0" />
            </a>
        </div>
    );
}