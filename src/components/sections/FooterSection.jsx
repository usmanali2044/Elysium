import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import footerLogo from '../../assets/elysium-footer-logo-optimized.jpg'

gsap.registerPlugin(ScrollTrigger)

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
]

const footerFacts = [
  ['CEO', 'Bilal Ahmad'],
  ['Phone', '03008993232'],
  ['Founded', '2018'],
  ['Location', 'PWD, Islamabad'],
]

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function FooterSection() {
  const footerRef = useRef(null)
  const glowRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (prefersReducedMotion || !footerRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        glowRef.current,
        {
          opacity: 0.18,
          scale: 0.84,
        },
        {
          opacity: 0.5,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        '[data-footer-item]',
        {
          y: 42,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 82%',
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden border-t border-lime-200/10 bg-[#050505] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-10"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.14),transparent_72%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1520px]">
        <div className="hero-panel overflow-hidden rounded-[2.2rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(18,24,12,0.88),rgba(10,10,10,0.97)_45%,rgba(13,15,9,0.88)_100%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_0.8fr_0.9fr] lg:items-start">
            <motion.div
              data-footer-item=""
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
              className="max-w-[28rem]"
            >
              <div className="relative inline-flex overflow-hidden rounded-[1.8rem] border border-lime-200/10 bg-black/30 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <motion.img
                  src={footerLogo}
                  alt="ELYSIUM logo"
                  className="h-auto w-[14rem] object-contain sm:w-[17rem]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { y: [0, -4, 0], rotate: [0, -1, 0] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              <p className="mt-6 max-w-[24rem] text-sm leading-7 text-white/62 sm:text-base">
                A focused training environment built to shape stronger bodies,
                sharper discipline, and long-term progress for serious members.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-lime-200/18 bg-lime-200/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-lime-200">
                  Shaping Bodies
                </span>
                <span className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                  Since 2018
                </span>
              </div>
            </motion.div>

            <motion.div
              data-footer-item=""
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
              custom={1}
              className="lg:justify-self-center"
            >
              <p className="font-body text-[0.78rem] uppercase tracking-[0.34em] text-lime-200/58">
                Follow Us On
              </p>

              <div className="mt-5 flex items-center gap-4">
                <motion.a
                  href="https://www.facebook.com/p/Elysium-Gym-100064240622590/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.04 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-200/16 bg-[#eff9c8] text-[#050505] shadow-[0_14px_30px_rgba(204,255,74,0.16)]"
                >
                  <FacebookIcon />
                </motion.a>
              </div>

              <div className="mt-8">
                <p className="font-body text-[0.78rem] uppercase tracking-[0.34em] text-lime-200/58">
                  Explore
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base text-white/72 transition hover:text-lime-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              data-footer-item=""
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
              custom={2}
              className="lg:justify-self-end"
            >
              <p className="font-body text-[0.78rem] uppercase tracking-[0.34em] text-lime-200/58">
                Contact
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {footerFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.25rem] border border-white/7 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">
                      {label}
                    </p>
                    <p className="mt-2 font-body text-base font-semibold text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v2.8h2.4V21h3.1Z" />
    </svg>
  )
}
