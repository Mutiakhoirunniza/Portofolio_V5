import { memo } from 'react';
import PropTypes from 'prop-types';
import { Sparkles } from 'lucide-react';

export const StatusBadge = memo(() => (
    <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Ready to Innovate
        </div>
    </div>
));
StatusBadge.displayName = 'StatusBadge';

export const MainTitle = memo(() => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
            Web <span className="text-indigo-400">Developer</span>
        </h1>
    </div>
));
MainTitle.displayName = 'MainTitle';

export const TechStack = memo(({ tech }) => (
    <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors">
        {tech}
    </div>
));
TechStack.displayName = 'TechStack';
TechStack.propTypes = {
    tech: PropTypes.node.isRequired,
};

export const CTAButton = memo(({ href, text, icon: Icon }) => (
    <a href={href}>
        <button className="inline-flex items-center justify-center gap-2 w-[160px] h-11 rounded-lg bg-indigo-600 text-white font-semibold text-sm shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-300 group">
            {text}
            <Icon className={`w-4 h-4 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300`} />
        </button>
    </a>
));
CTAButton.displayName = 'CTAButton';
CTAButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

export const SocialLink = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
            <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
        </button>
    </a>
));
SocialLink.displayName = 'SocialLink';
SocialLink.propTypes = {
    icon: PropTypes.elementType.isRequired,
    link: PropTypes.string.isRequired,
};
