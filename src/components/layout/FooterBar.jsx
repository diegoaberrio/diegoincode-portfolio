import { motion } from "framer-motion";
import {
  Github,
  Home,
  Instagram,
  Layers3,
  LayoutGrid,
  Linkedin,
  Mail,
  Music2,
  Sparkles,
  Code2,
  Youtube,
} from "lucide-react";

function FooterBar({ brand, reduceMotion, viewport }) {
  return (
    <>
      <motion.footer
        className="site-footer site-footer--sticky"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="site-footer__inner">
          <div className="site-footer__left">
            <span className="site-footer__brand-orb" aria-hidden="true">
              <span className="site-footer__brand-dot" />
            </span>

            <div className="site-footer__brand-copy">
              <span className="site-footer__eyebrow">portfolio dev</span>
              <span className="site-footer__brand-name">
                © {new Date().getFullYear()} {brand}
              </span>
            </div>
          </div>

          <nav className="site-footer__center" aria-label="Navegación secundaria">
            <a href="#hero">
              <Home size={16} />
              <span>Inicio</span>
            </a>

            <a href="#projects">
              <Layers3 size={16} />
              <span>Proyectos</span>
            </a>

            <a href="#products">
              <LayoutGrid size={16} />
              <span>Productos</span>
            </a>

            <a href="#stack">
              <Code2 size={16} />
              <span>Stack</span>
            </a>

            <a href="#contact">
              <Mail size={16} />
              <span>Contacto</span>
            </a>
          </nav>

          <div className="site-footer__right">
            <div className="site-footer__socials" aria-label="Redes sociales">
              <a
                className="site-footer__social"
                href="https://www.instagram.com/diegoincode/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                className="site-footer__social"
                href="https://www.tiktok.com/@diegoincode"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir TikTok"
                title="TikTok"
              >
                <Music2 size={16} />
              </a>

              <a
                className="site-footer__social"
                href="https://www.youtube.com/@diegoincode"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir YouTube"
                title="YouTube"
              >
                <Youtube size={16} />
              </a>

              <a
                className="site-footer__social"
                href="https://www.linkedin.com/in/diego-alonso-berr%C3%ADo-g%C3%B3mez"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>

              <a
                className="site-footer__social"
                href="https://github.com/diegoaberrio"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir GitHub"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </div>

            <a
              className="site-footer__action site-footer__action--primary"
              href="mailto:diegoaberrio@hotmail.com"
              aria-label="Enviar email"
            >
              <Mail size={16} />
              <span>Hablemos</span>
            </a>
          </div>
        </div>
      </motion.footer>

      <nav className="bottom-nav" aria-label="Navegación móvil">
        <a className="bottom-nav__item" href="#hero">
          <Home size={18} />
          <span>Inicio</span>
        </a>

        <a className="bottom-nav__item" href="#projects">
          <Layers3 size={18} />
          <span>Proyectos</span>
        </a>

        <a className="bottom-nav__item" href="#products">
          <LayoutGrid size={18} />
          <span>Productos</span>
        </a>

        <a className="bottom-nav__item" href="#stack">
          <Code2 size={16} />
          <span>Stack</span>
        </a>

        <a className="bottom-nav__item" href="#contact">
          <Mail size={18} />
          <span>Contacto</span>
        </a>
      </nav>
    </>
  );
}

export default FooterBar;