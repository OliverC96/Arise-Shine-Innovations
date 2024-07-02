import { useEffect, useState } from "react";

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
        <div className={`${scrolled ? 'bg-green-xdark' : 'bg-green-dark'} ${scrolled ? 'text-gold' : 'text-gold'} flex justify-between items-center h-[10vh] px-6 font-body text-base sm:text-lg sticky top-0 z-50 transition-all duration-200 ease-in`}>
            <a className="hover:cursor-pointer" href="/"> H6 Life Coaching </a>
            <p className="hidden lg:block"> Simone Homeniuk – Thought Leader and Wisdom Coach </p>
            <a className="hover:underline" href="/"> Home </a>
        </div>
    );

}