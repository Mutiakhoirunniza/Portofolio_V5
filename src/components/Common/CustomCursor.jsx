import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Glow Blob (Premium Trail) */}
            <div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[10000] hidden md:block"
                style={{
                    transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${isHovering ? 2 : 1})`,
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 100%)',
                    filter: 'blur(8px)',
                    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s ease',
                }}
            />

            {/* Inverting Dot (The 'Smart' Point) */}
            <div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10001] hidden md:block mix-blend-difference bg-white"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovering ? 0.5 : 1})`,
                    transition: 'transform 0.1s ease-out, scale 0.2s ease-out',
                }}
            />

            {/* Outer Border (Subtle Detail) */}
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/10 pointer-events-none z-[9999] hidden md:block"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
                    transition: 'transform 0.25s ease-out, scale 0.3s ease-out',
                }}
            />
        </>
    );
};

export default CustomCursor;
