import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  ExternalLink,
  Gift,
  HeartPulse,
  LineChart,
  MessageSquare,
  Radar,
  Truck,
  Wallet,
} from "lucide-react";

const ICONS = {
  HeartPulse,
  CalendarClock,
  Radar,
  MessageSquare,
  BarChart3,
  LineChart,
  Truck,
  Wallet,
  Gift,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerGrid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

function ProductTile({ product }) {
  const Icon = ICONS[product.icon] ?? ExternalLink;

  return (
    <motion.article
      className={`product-tile${
        product.featured ? " product-tile--featured" : ""
      }`}
      variants={fadeUp}
    >
      <a
        className="product-tile__link"
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir demo de ${product.name} en una pestaña nueva`}
      >
        <div className="product-tile__top">
          <span className="product-tile__icon" aria-hidden="true">
            <Icon size={product.featured ? 26 : 20} />
          </span>
          <span className="product-tile__external" aria-hidden="true">
            <ExternalLink size={14} />
          </span>
        </div>

        <div className="product-tile__body">
          <span className="product-tile__category">{product.category}</span>
          <strong className="product-tile__name">{product.name}</strong>
          <p className="product-tile__description">{product.description}</p>
        </div>

        <div className="product-tile__footer">
          <span className="product-tile__status">
            <span className="product-tile__status-dot" aria-hidden="true" />
            Demo disponible
          </span>
          <span className="product-tile__cta">
            Ver demo
            <ArrowUpRight size={16} />
          </span>
        </div>
      </a>
    </motion.article>
  );
}

function DeployedProducts({ products, viewport }) {
  return (
    <motion.section
      className="products-section"
      id="products"
      aria-label="Productos desplegados"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={staggerGrid}
    >
      <motion.div className="section-heading" variants={fadeUp}>
        <div>
          <p className="section-heading__eyebrow">Productos desplegados</p>
          <h2>Aplicaciones reales, no solo conceptos.</h2>
        </div>

        <p className="section-heading__text">
          Herramientas y productos digitales construidos y desplegados,
          disponibles para explorar en directo. Cada demo abre en una pestaña
          nueva.
        </p>
      </motion.div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductTile product={product} key={product.slug} />
        ))}
      </div>
    </motion.section>
  );
}

export default DeployedProducts;
