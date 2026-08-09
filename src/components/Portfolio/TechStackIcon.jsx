import PropTypes from 'prop-types';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 cursor-pointer shadow-sm hover:shadow-md">
      <img
        src={TechStackIcon}
        alt={`${Language} icon`}
        className="h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
      />
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-indigo-400 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

TechStackIcon.propTypes = {
  TechStackIcon: PropTypes.string,
  Language: PropTypes.string.isRequired,
};

export default TechStackIcon;