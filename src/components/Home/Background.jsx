import {
    FiArrowRightCircle,
    FiExternalLink
} from "react-icons/fi";

export default function Background() {
    return (
        <div className="py-24 px-72 flex bg-gold font-body justify-between gap-12">
            <div>
                <img className="rounded-2xl" src="profile_pic.JPG" />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-green-dark font-header font-bold mt-2">
                    About Me
                </h1>
                <p className="text-slate-800 text-lg mt-2">
                    <b>Simone Homeniuk – Thought Leader and Wisdom Coach</b>
                </p>
                <p className="text-slate-800">
                    I am a <b><u>Jay Shetty Certified Life Coach.</u> </b>
                    I have had the amazing opportunity to attend the <a href="https://www.jayshetty.me" target="_blank" className="hover:text-lavender"><u> Jay Shetty Certification School</u></a>, which was by far, the best personal, and professional education experience in my 52 years of LIFE.
                    It was GLOBAL classroom learning about how to make wisdom go viral for HUMANITY.
                </p>
                <p className="text-slate-800">
                    I was a teacher for <b>28 years;</b> I have taught in <b>3</b> Canadian provinces.
                    I have had the privilege of meeting <b>thousands</b> of people; few with unshakeable SELF WORTH.
                    Why do so many people feel <u>unworthy?</u> Do you feel like you have such a strong sense of SELF WORTH that you can confidently claim your AUTHENTICITY?
                    It took me <b>51 years</b> to finally, and truly <u>embrace</u> my SELF WORTH.
                    I am lucky because I have met some courageous people with true SELF WORTH who have been role models for me.
                </p>
                <p className="text-slate-800">
                    As Jay Shetty says: <i><u>“Make wisdom go viral.”</u></i>
                </p>
                <p className="text-slate-800">
                    This is <b>Simone Homeniuk</b> bringing <b>HERSTORY</b> to the table.
                </p>
                <button
                    onClick={() => window.location = 'mailto:simonehomeniuk@h6lifecoaching.ca'}
                    className="text-gold bg-green-dark w-fit px-4 py-3 mt-3 rounded transition hover:bg-lavender duration-200 flex gap-2"
                >
                    <FiArrowRightCircle className="text-2xl" />
                    Email Me for Life Coaching Packages
                </button>
            </div>
        </div>
    );
}