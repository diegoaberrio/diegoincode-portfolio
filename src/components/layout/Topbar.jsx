import { motion } from "framer-motion";
import {
  Layers3,
  Sparkles,
  Code2,
  Mail,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";

function Topbar({ brand, isScrolled, reduceMotion }) {
  return (
    <motion.header
      className={`topbar ${isScrolled ? "is-scrolled" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: -14 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="topbar__inner">
        <a className="brand-mark" href="#hero" aria-label="Ir al inicio">
          <span className="brand-mark__orb" aria-hidden="true">
            <span className="brand-mark__dot" />
          </span>

          <span className="brand-mark__copy">
            <span className="brand-mark__eyebrow">portfolio dev</span>
            <span className="brand-mark__name">{brand}</span>
          </span>
        </a>

        <nav className="topbar__nav" aria-label="Navegación principal">
          <a className="topbar__nav-link" href="#projects">
            <Layers3 size={16} />
            <span>Proyectos</span>
          </a>

          <a className="topbar__nav-link" href="#services">
            <Sparkles size={16} />
            <span>Servicios</span>
          </a>

          <a className="topbar__nav-link" href="#stack">
            <Code2 size={16} />
            <span>Stack</span>
          </a>

          <a className="topbar__nav-link" href="#contact">
            <Mail size={16} />
            <span>Contacto</span>
          </a>
        </nav>

        <div className="topbar__actions" aria-label="Redes sociales">
          <a
            className="topbar__social"
            href="https://www.instagram.com/diegoincode/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Diego In Code"
            title="Instagram"
          >
            <Instagram size={16} />
          </a>

          <a
            className="topbar__social"
            href="https://www.tiktok.com/@diegoincode"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok de Diego In Code"
            title="TikTok"
          >
            <Music2 size={16} />
          </a>

          <a
            className="topbar__social"
            href="https://www.youtube.com/@diegoincode"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube de Diego In Code"
            title="YouTube"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Topbar;