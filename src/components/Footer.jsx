import socialLinks from "../data/socials";

export default function Footer(props) {
    const currYear = new Date().getFullYear();
    return (
        <div className="w-screen flex flex-col items-center gap-6 py-10 bg-green-xdark">
            <div className="flex gap-5">
                {
                    socialLinks.map(e => {
                        return (
                            <a
                                className="rounded-full text-gold border-2 border-gold p-3 hover:bg-gold hover:text-green-xdark transition duration-200"
                                href={e.link}
                                target="_blank"
                            >
                                <e.icon className="text-2xl" />
                            </a>
                        );
                    })
                }
            </div>
            <footer className="text-gold"> ⓒ {currYear} Arise & Shine Innovation Inc. </footer>
        </div>
    );
}