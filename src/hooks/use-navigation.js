import { useState, useEffect } from 'react'

// Credit: Paige Niedringhaus
// https://blog.bitsrc.io/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0
export default function useNavigation() {
    const BREAKPOINT = 767;
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= BREAKPOINT) {
            setShowMobileNav(false);
        }
        else {
            setShowMobileNav(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= BREAKPOINT) {
                setShowMobileNav(false);
                setMobileNavOpen(false);
            }
            else {
                setShowMobileNav(true);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return {
        showMobileNav,
        mobileNavOpen,
        setMobileNavOpen
    }
}