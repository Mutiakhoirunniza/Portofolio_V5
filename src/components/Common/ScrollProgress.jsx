import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.pageYOffset;
            const progress = (currentScroll / totalScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-1 z-[9999]"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
            }}
        >
            <div
                className="h-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] transition-all duration-150 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                style={{
                    width: `${scrollProgress}%`,
                }}
            />
        </div>
    );
};

export default ScrollProgress;
