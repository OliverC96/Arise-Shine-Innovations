import { FaDownload } from "react-icons/fa6";

export default function DownloadButton() {
    return (
        <a
            href="Manifesto of Love and Peace.docx"
            download
            className="absolute bottom-[4vh] lg:bottom-[6vh] flex gap-3 items-center border-2 border-gold rounded-md px-3.5 py-2 text-gold lg:text-lg hover:text-green-dark hover:bg-gold transition-all duration-300">
            My Autobiographical Manifesto
            <FaDownload />
        </a>
    );
}