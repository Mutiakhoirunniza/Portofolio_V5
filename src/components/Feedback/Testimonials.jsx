import { memo } from 'react';
import PropTypes from 'prop-types';
import { Star, Quote, UserCircle2 } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Alex Thompson",
        role: "Senior Tech Lead",
        content: "Diah has an exceptional ability to tackle complex backend challenges. Her proficiency in Golang and Gin framework significantly improved our system performance.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Project Manager",
        content: "Working with Diah was a breeze. She's not only technically sound with PHP and Laravel but also has a great eye for user experience and functional design.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Roberts",
        role: "Fullstack Developer",
        content: "A proactive team player with a deep understanding of React and modern web architectures. Her problem-solving skills are top-notch.",
        rating: 5
    }
];

const TestimonialCard = memo(({ testimonial }) => (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
            <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
            </div>
            <Quote className="w-8 h-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" />
        </div>

        <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
            &quot;{testimonial.content}&quot;
        </p>

        <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400">
                <UserCircle2 className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
            </div>
        </div>
    </div>
));
TestimonialCard.displayName = 'TestimonialCard';
TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

const Testimonials = () => {
    return (
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                        <Star className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Client Testimonials</h3>
                </div>
            </div>

            <div className="p-8 space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar">
                {testimonials.map((item) => (
                    <TestimonialCard key={item.id} testimonial={item} />
                ))}
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.7);
        }
      `}</style>
        </div>
    );
};

export default memo(Testimonials);
