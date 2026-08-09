import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const LiveClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 group hover:border-[#6366f1]/50 transition-all duration-300 shadow-2xl">
            <Clock className="w-3.5 h-3.5 text-[#6366f1] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">
                {formatTime(time)}
            </span>
        </div>
    );
};

export default LiveClock;
