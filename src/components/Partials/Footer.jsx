import {
    LuInstagram,
    LuMail
} from "react-icons/lu";

const socialLinks = [
    {
        link: "https://www.google.com/gmail/about/",
        icon: LuMail
    },
    {
        link: "https://www.instagram.com",
        icon: LuInstagram
    }
]

export default function Footer(props) {
    const currYear = new Date().getFullYear();
    return (
        <div className="w-screen flex flex-col items-center gap-5 py-10 bg-green-xdark">
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
            <footer className="text-gold"> ⓒ {currYear} {props.author} </footer>
        </div>
    );
}