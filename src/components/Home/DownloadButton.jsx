import { FaDownload } from "react-icons/fa6";

export default function DownloadButton(props) {
    return (
        <a
            href="Manifesto of Love and Peace.docx"
            download
            className={`${props.type === "small" ? "sm:hidden flex" : "hidden sm:flex"} mx-10 text-center absolute bottom-8 flex gap-2 items-center border-2 border-gold rounded-md px-3 py-2 text-gold lg:text-lg hover:text-green-dark hover:bg-gold transition-all duration-300 translate-x-0 translate-y-0 transform-none`}>
            { props.type === "small" ? "My Autobiographical Manifesto" : 'My Autobiographical Manifesto of "Love and Peace"' }
            <FaDownload className="text-lg shrink-0" />
        </a>
    );
}