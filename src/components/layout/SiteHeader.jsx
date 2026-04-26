import { motion } from 'framer-motion'
import brandLogo from '../../assets/elysium-footer-logo-optimized.jpg'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
]

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const navItem = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function SiteHeader() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={navContainer}
      className="relative z-40 flex items-center justify-between gap-4 py-3 sm:py-4"
    >
      <motion.a
        variants={navItem}
        href="#home"
        className="flex items-center gap-3"
        aria-label="ELYSIUM home"
      >
        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-lime-200/14 bg-[#171513] p-1 shadow-[0_10px_28px_rgba(188,235,22,0.12)] sm:h-12 sm:w-12">
          <img
            src={brandLogo}
            alt=""
            className="h-full w-full rounded-[0.9rem] object-cover"
          />
        </span>
        <span className="font-display text-[1.95rem] font-semibold uppercase tracking-[0.16em] text-white sm:text-[2.25rem]">
          ELYSIUM
        </span>
      </motion.a>

      <motion.nav
        variants={navContainer}
        className="hero-panel hidden items-center gap-1 rounded-full px-3 py-1.5 lg:flex"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            variants={navItem}
            href={item.href}
            className="rounded-full px-4 py-2 text-[0.82rem] font-medium tracking-[0.12em] text-white/68 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.nav>

      <motion.div
        variants={navContainer}
        className="hidden items-center gap-3 sm:flex"
      >
        <motion.a
          variants={navItem}
          href="#contact"
          className="hero-button-secondary rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.08em] transition hover:-translate-y-0.5 hover:border-lime-300/40 hover:text-lime-200"
        >
          Contact Us
        </motion.a>
        <motion.a
          variants={navItem}
          href="#programs"
          className="hero-button-primary rounded-full px-6 py-2.5 text-sm font-bold tracking-[0.08em] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(188,235,22,0.28)]"
        >
          Join Now
        </motion.a>
      </motion.div>
    </motion.header>
  )
}
