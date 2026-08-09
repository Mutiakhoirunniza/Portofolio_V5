import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code, CheckCircle2
} from "lucide-react";
import Swal from 'sweetalert2';
import { PROJECTS } from "../../constants";
import { toSlug } from "../../utils/slug";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];

  return (
    <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400" />
      <span className="text-xs md:text-sm font-medium text-indigo-300">
        {tech}
      </span>
    </div>
  );
};

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="flex items-start space-x-3 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300">
      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 mt-1 shrink-0" />
      <span className="text-sm md:text-base text-slate-300 leading-relaxed">
        {feature}
      </span>
    </li>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired,
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-white/[0.03] rounded-xl border border-white/10">
      <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-white/10 transition-all duration-300 hover:border-indigo-500/30">
        <div className="bg-indigo-500/10 p-1.5 md:p-2 rounded-full">
          <Code2
            className="text-indigo-400 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-white">
            {techStackCount}
          </div>
          <div className="text-[10px] md:text-xs text-slate-500">
            Total Teknologi
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-white/10 transition-all duration-300 hover:border-indigo-500/30">
        <div className="bg-indigo-500/10 p-1.5 md:p-2 rounded-full">
          <Layers
            className="text-indigo-400 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-white">
            {featuresCount}
          </div>
          <div className="text-[10px] md:text-xs text-slate-500">
            Fitur Utama
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectStats.propTypes = {
  project: PropTypes.shape({
    TechStack: PropTypes.array,
    Features: PropTypes.array,
  }),
};

const handleGithubClick = (githubLink) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#6366f1",
      background: "#0f0f23",
      color: "#f1f5f9",
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = PROJECTS.find(
      (p) => toSlug(p.Title) === id || String(p.id) === id
    );

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
        Github: selectedProject.Github || 'https://github.com/Mutiakhoirunniza',
      };
      setProject(enhancedProject);
    } else {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }

  const projectUrl = `https://diahmutiakhoirunniza.vercel.app/project/${toSlug(project.Title)}`;

  return (
    <>
      <Helmet>
        <title>{project.Title} — Mutia Khoirunniza</title>
        <meta
          name="description"
          content={
            project.Description
              ? project.Description.slice(0, 155)
              : `Project ${project.Title} oleh Mutia Khoirunniza — Frontend Web Developer.`
          }
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={projectUrl} />
        <meta
          property="og:title"
          content={`${project.Title} — Mutia Khoirunniza`}
        />
        <meta
          property="og:description"
          content={project.Description?.slice(0, 155)}
        />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:type" content="website" />
        {project.Img && <meta property="og:image" content={project.Img} />}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "${project.Title}",
            "description": "${project.Description?.replace(/"/g, '\\"')}",
            "url": "${projectUrl}",
            "author": {
              "@type": "Person",
              "name": "Mutia Khoirunniza",
              "url": "https://diahmutiakhoirunniza.vercel.app"
            }
          }
        `}</script>
      </Helmet>


      <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
            <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 rounded-xl text-slate-300 hover:text-indigo-300 transition-all duration-300 border border-white/10 hover:border-indigo-500/30 text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-slate-500">
                <span>Projects</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-slate-300 truncate">{project.Title}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6 md:space-y-10 animate-slideInLeft">
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                    {project.Title}
                  </h1>
                  <div className="h-1.5 w-16 md:w-24 bg-indigo-500 rounded-full" />
                </div>

                <div className="max-w-none">
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                    {project.Description}
                  </p>
                </div>

                <ProjectStats project={project} />

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-sm md:text-base"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Live Demo</span>
                  </a>

                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-white/5 hover:border-indigo-500/50 hover:text-indigo-300 text-slate-300 rounded-xl transition-all duration-300 border border-white/10 text-sm md:text-base"
                    onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Github</span>
                  </a>
                </div>

                {project.AdditionalLinks && project.AdditionalLinks.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                      Portal Lain
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {project.AdditionalLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-300 rounded-xl transition-all duration-300 border border-white/10 hover:border-indigo-500/30 text-xs md:text-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span className="font-medium">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                    <Code2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                    Technologies Used
                  </h3>
                  {project.TechStack.length > 0 ? (
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.TechStack.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm md:text-base text-slate-500">
                      No technologies added.
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6 md:space-y-10 animate-slideInRight">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-sm group">
                  <img
                    src={project.Img}
                    alt={project.Title}
                    className="w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                  />
                </div>

                {/* Fitur Utama */}
                <div className="bg-white/5 rounded-3xl p-6 md:p-10 border border-white/10 shadow-sm space-y-8 hover:border-white/20 transition-colors duration-300 group">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Star className="w-6 h-6 text-amber-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                      Key Features
                    </h3>
                    <div className="hidden md:block h-px flex-grow mx-6 bg-white/10" />
                  </div>

                  {project.Features.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.Features.map((feature, index) => (
                        <FeatureItem key={index} feature={feature} />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-500 text-center py-4">No features added yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default ProjectDetails;
