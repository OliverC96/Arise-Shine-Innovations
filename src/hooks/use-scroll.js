import { useState, useEffect } from 'react';

export default function useScroll() {
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

    return scrolled;
}