import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { portfolio, projects } from "../data/portfolio";
import { deployedProducts } from "../data/deployedProducts";
import {
  getCloudinaryImage,
  getCloudinaryPoster,
  getCloudinaryVideo,
  getCloudinaryCardImage,
} from "../utils/cloudinary";
import Topbar from "../components/layout/Topbar";
import FooterBar from "../components/layout/FooterBar";
import DeployedProducts from "../components/sections/DeployedProducts";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function getInitialStaticProjectMedia() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 767;
}

function HomePage() {
  const featuredProjects = projects.slice(0, 6);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);
  const [activeShotIndex, setActiveShotIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [useStaticProjectMedia, setUseStaticProjectMedia] = useState(
    getInitialStaticProjectMedia
  );
  const reduceMotion = useReducedMotion();

  const activeProject = useMemo(
    () =>
      featuredProjects.find((project) => project.slug === activeProjectSlug) ??
      null,
    [activeProjectSlug, featuredProjects]
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateProjectMediaMode = () => {
      setUseStaticProjectMedia(mediaQuery.matches);
    };

    updateProjectMediaMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateProjectMediaMode);
      return () =>
        mediaQuery.removeEventListener("change", updateProjectMediaMode);
    }

    mediaQuery.addListener(updateProjectMediaMode);
    return () => mediaQuery.removeListener(updateProjectMediaMode);
  }, []);

  const openProject = (slug) => {
    setActiveProjectSlug(slug);
    setActiveShotIndex(0);
  };

  const closeModal = () => {
    setActiveProjectSlug(null);
    setActiveShotIndex(0);
  };

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        setActiveShotIndex(
          (current) => (current + 1) % activeProject.assets.shots.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveShotIndex((current) =>
          current === 0 ? activeProject.assets.shots.length - 1 : current - 1
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const goPrevShot = () => {
    if (!activeProject) return;
    setActiveShotIndex((current) =>
      current === 0 ? activeProject.assets.shots.length - 1 : current - 1
    );
  };

  const goNextShot = () => {
    if (!activeProject) return;
    setActiveShotIndex(
      (current) => (current + 1) % activeProject.assets.shots.length
    );
  };

  const hasLink = (value) =>
    typeof value === "string" && value.trim().length > 0;

  const viewport = reduceMotion ? { once: true } : { once: true, amount: 0.2 };

  return (
    <div className="app-shell">
      <div className="app-shell__bg" />
      <div className="app-shell__noise" />

      <main className="app-shell__main">
        <Topbar
          brand={portfolio.brand}
          isScrolled={isScrolled}
          reduceMotion={reduceMotion}
        />

        <section className="hero" id="hero">
          <motion.div
            className="hero__content"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="hero__badge">
              <Sparkles size={16} />
              <span>
                Full stack · mobile-first · productos digitales de principio a
                fin
              </span>
            </div>

            <div className="hero__copy">
              <p className="hero__eyebrow">Portfolio comercial personal</p>

              <h1>
                Construyo interfaces que
                <span> se ven pro, se sienten fluidos y convierten.</span>
              </h1>

              <p className="hero__lead">{portfolio.pitch}</p>
            </div>

            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-label">Rol</span>
                <strong>{portfolio.role}</strong>
              </div>

              <div className="hero__meta-item">
                <span className="hero__meta-label">Ubicación</span>
                <strong>
                  <MapPin size={16} />
                  {portfolio.location}
                </strong>
              </div>

              <div className="hero__meta-item">
                <span className="hero__meta-label">Proyectos</span>
                <strong>
                  {projects.length} proyectos completos con vídeo y capturas
                </strong>
              </div>
            </div>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Ver proyectos
                <ArrowUpRight size={18} />
              </a>

              <a className="button button--secondary" href="#contact">
                Contactar
              </a>
            </div>

            <div className="proof-strip">
              <span className="proof-chip">UX mobile-first real</span>
              <span className="proof-chip">React + motion + Cloudinary</span>
              <span className="proof-chip">Proyectos full stack completos</span>
              <span className="proof-chip">Glass UI + IA/tech premium</span>
            </div>
          </motion.div>

          <motion.aside
            className="hero-spotlight"
            aria-label="Vista destacada del portfolio"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: 0.08 }}
          >
            <div className="hero-spotlight__frame">
              <div className="hero-spotlight__glow" />
              <video
                src={getCloudinaryVideo(featuredProjects[2].assets.loop)}
                poster={getCloudinaryPoster(featuredProjects[2].assets.loop)}
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="hero-spotlight__card">
              <p>Proyecto destacado</p>
              <strong>{featuredProjects[2].name}</strong>
              <span>{featuredProjects[2].tagline}</span>
            </div>
          </motion.aside>
        </section>

        <motion.section
          className="highlights"
          aria-label="Pruebas de valor"
          variants={staggerGrid}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.article className="highlight-card" variants={fadeUp}>
            <span>01</span>
            <strong>Productos digitales de principio a fin</strong>
            <p>
              No construyo piezas sueltas. Desarrollo experiencias completas,
              visuales, funcionales y listas para generar impacto real.
            </p>
          </motion.article>

          <motion.article className="highlight-card" variants={fadeUp}>
            <span>02</span>
            <strong>Responsive sólido de verdad</strong>
            <p>
              Diseño mobile-first con una experiencia desktop trabajada desde el
              inicio, no como una adaptación posterior.
            </p>
          </motion.article>

          <motion.article className="highlight-card" variants={fadeUp}>
            <span>03</span>
            <strong>Presentación visual de producto</strong>
            <p>
              Cada proyecto se muestra como un producto real: preview, detalle,
              capturas, contexto y ejecución completa.
            </p>
          </motion.article>
        </motion.section>

        <motion.section
          className="projects-section"
          id="projects"
          initial={false}
          animate="show"
          variants={staggerGrid}
        >
          <motion.div
            className="section-heading"
            variants={fadeUp}
            initial={false}
            animate="show"
          >
            <div>
              <p className="section-heading__eyebrow">Proyectos</p>
              <h2>
                Proyectos full stack diseñados para verse bien, funcionar mejor
                y dejar huella.
              </h2>
            </div>

            <p className="section-heading__text">
              Una selección de productos digitales donde conviven diseño
              cuidado, lógica de negocio y ejecución sólida de principio a fin.
            </p>
          </motion.div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.slug}
                variants={fadeUp}
                initial={false}
                animate="show"
              >
                <button
                  type="button"
                  className="project-card__media project-card__media-button"
                  onClick={() => openProject(project.slug)}
                  aria-label={`Abrir detalle de ${project.name}`}
                >
                  {useStaticProjectMedia ? (
                    <img
                      src={getCloudinaryCardImage(project.assets.shots[0])}
                      alt={`${project.name} preview`}
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                    />
                  ) : (
                    <video
                      src={getCloudinaryVideo(project.assets.loop)}
                      poster={getCloudinaryPoster(project.assets.loop)}
                      preload="metadata"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}

                  <div className="project-card__overlay" />
                  <div className="project-card__play">
                    <Play size={18} />
                    <span>Ver proyecto</span>
                  </div>
                </button>

                <div className="project-card__body">
                  <div className="project-card__topline">
                    <strong>{project.name}</strong>
                    <span>Preview del proyecto</span>
                  </div>

                  <p>{project.tagline}</p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span className="tag-chip" key={`${project.slug}-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <button
                      type="button"
                      className="button button--ghost button--sm"
                      onClick={() => openProject(project.slug)}
                    >
                      Ver detalle
                      <ArrowUpRight size={16} />
                    </button>

                    {hasLink(project.demo) ? (
                      <a
                        className="button button--ghost button--sm"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="button button--disabled button--sm">
                        Demo pronto
                      </span>
                    )}

                    {hasLink(project.repo) ? (
                      <a
                        className="button button--ghost button--sm"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                    ) : (
                      <span className="button button--disabled button--sm">
                        Repo privado
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <DeployedProducts products={deployedProducts} viewport={viewport} />

        <motion.section
          className="info-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerGrid}
        >
          <motion.article
            className="info-panel"
            id="services"
            variants={fadeUp}
          >
            <p className="section-heading__eyebrow">Servicios</p>
            <h3>Qué construyo</h3>
            <ul className="feature-list">
              <li>
                Landings, webs e interfaces de producto con estética premium
              </li>
              <li>
                Dashboards, paneles operativos y soluciones visuales para
                negocio
              </li>
              <li>
                Flujos guiados, reporting inteligente y experiencias responsive
              </li>
              <li>
                Productos digitales completos, del frontend a la lógica de
                negocio
              </li>
            </ul>
          </motion.article>

          <motion.article className="info-panel" id="stack" variants={fadeUp}>
            <p className="section-heading__eyebrow">Stack</p>
            <h3>Stack full stack orientado a producto</h3>
            <div className="stack-cloud">
              {[
                "React",
                "JavaScript",
                "Node.js",
                "Python",
                "Django REST",
                "PHP",
                "MySQL",
                "Spring Boot",
                "Tailwind CSS",
                "Angular",
              ].map((item) => (
                <span className="stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          className="cta-panel"
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="cta-panel__copy">
            <p className="section-heading__eyebrow">CTA final</p>
            <h2>
              Si buscas producto digital con criterio, aquí hay nivel para
              construirlo.
            </h2>
            <p>
              Portfolio pensado para mostrar ejecución full stack, solidez
              técnica y experiencias digitales bien resueltas de principio a
              fin.
            </p>
          </div>

          <div className="cta-panel__actions">
            <a
              className="button button--primary"
              href={`mailto:${portfolio.email}`}
            >
              <Mail size={18} />
              Email
            </a>

            <a
              className="button button--secondary"
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              className="button button--secondary"
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.section>

        <FooterBar
          brand={portfolio.brand}
          reduceMotion={reduceMotion}
          viewport={viewport}
        />
      </main>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-shell"
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.name}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1 }}
            exit={reduceMotion ? {} : { opacity: 0 }}
          >
            <motion.div
              className="modal-backdrop"
              onClick={closeModal}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? {} : { opacity: 1 }}
              exit={reduceMotion ? {} : { opacity: 0 }}
            />

            <motion.div
              className="modal-card"
              initial={
                reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }
              }
              animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="modal-card__header">
                <div>
                  <p className="section-heading__eyebrow">Case preview</p>
                  <h3>{activeProject.name}</h3>
                </div>

                <button
                  type="button"
                  className="modal-close"
                  onClick={closeModal}
                  aria-label="Cerrar detalle"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="modal-card__layout">
                <div className="modal-video">
                  <video
                    src={getCloudinaryVideo(
                      activeProject.assets.detail,
                      "q_auto:good,vc_auto,w_1080,c_fill,ar_9:16"
                    )}
                    poster={getCloudinaryPoster(activeProject.assets.detail)}
                    preload="metadata"
                    controls
                    playsInline
                  />
                </div>

                <div className="modal-content">
                  <p className="modal-content__lead">
                    {activeProject.description}
                  </p>

                  <div className="project-card__tags">
                    {activeProject.tags.map((tag) => (
                      <span
                        className="tag-chip"
                        key={`${activeProject.slug}-modal-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="modal-shot-viewer">
                    <button
                      type="button"
                      className="modal-nav modal-nav--left"
                      onClick={goPrevShot}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeProject.assets.shots[activeShotIndex]}
                        src={getCloudinaryImage(
                          activeProject.assets.shots[activeShotIndex]
                        )}
                        alt={`${activeProject.name} captura ${
                          activeShotIndex + 1
                        }`}
                        loading="lazy"
                        initial={
                          reduceMotion ? false : { opacity: 0, scale: 1.015 }
                        }
                        animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
                        exit={reduceMotion ? {} : { opacity: 0, scale: 0.99 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </AnimatePresence>

                    <button
                      type="button"
                      className="modal-nav modal-nav--right"
                      onClick={goNextShot}
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="modal-thumbs">
                    {activeProject.assets.shots.map((shot, index) => (
                      <button
                        type="button"
                        key={shot}
                        className={`modal-thumb ${
                          index === activeShotIndex ? "is-active" : ""
                        }`}
                        onClick={() => setActiveShotIndex(index)}
                        aria-label={`Ver captura ${index + 1}`}
                      >
                        <img
                          src={getCloudinaryImage(
                            shot,
                            "f_auto,q_auto,w_420,c_limit"
                          )}
                          alt=""
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="modal-actions">
                    {hasLink(activeProject.demo) ? (
                      <a
                        className="button button--primary"
                        href={activeProject.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="button button--disabled">
                        Demo pronto
                      </span>
                    )}

                    {hasLink(activeProject.repo) ? (
                      <a
                        className="button button--secondary"
                        href={activeProject.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                    ) : (
                      <span className="button button--disabled">
                        Repo privado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;