import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const infoCards = [
  {
    label: 'CEO',
    value: 'Bilal Ahmad',
    note: 'Founder-led vision with a focus on discipline, consistency, and modern training culture.',
    icon: <UserIcon />,
  },
  {
    label: 'Phone',
    value: '03008993232',
    note: 'Call directly for memberships, program guidance, or a visit to the training floor.',
    icon: <PhoneIcon />,
  },
  {
    label: 'Location',
    value: 'PWD, Islamabad',
    note: 'Built for members who want a premium gym atmosphere with serious training energy.',
    icon: <PinIcon />,
  },
  {
    label: 'Founded',
    value: '2018',
    note: 'Years of shaping a focused community around strength, results, and growth.',
    icon: <SparkIcon />,
  },
]

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function ContactSection() {
  const sectionRef = useRef(null)
  const auraRef = useRef(null)
  const pulseRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        auraRef.current,
        {
          opacity: 0.2,
          scale: 0.82,
        },
        {
          opacity: 0.75,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            end: 'bottom top',
            scrub: 1.2,
          },
        },
      )

      gsap.fromTo(
        pulseRef.current,
        {
          y: 52,
          opacity: 0.45,
        },
        {
          y: -28,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        '[data-contact-card]',
        {
          y: 46,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050505] px-4 pb-24 pt-18 sm:px-6 sm:pb-28 sm:pt-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.62)_58%,rgba(5,5,5,0)_100%)]" />
      <div
        ref={auraRef}
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.16),transparent_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1520px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-[1020px] text-center"
        >
          <motion.p
            variants={reveal}
            className="font-body text-[0.8rem] uppercase tracking-[0.42em] text-lime-200/58"
          >
            Contact Elysium
          </motion.p>
          <motion.h2
            custom={1}
            variants={reveal}
            className="font-display mt-4 text-[clamp(3rem,7vw,6.4rem)] uppercase leading-[0.9] tracking-[-0.05em] text-white"
          >
            Meet The Vision
            <span className="block text-lime-200">Behind The Gym</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={reveal}
            className="mx-auto mt-6 max-w-[46rem] text-sm leading-7 text-white/66 sm:text-base"
          >
            Reach out, visit the facility, and connect with the leadership that
            shaped ELYSIUM into a serious training destination.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 sm:mt-16">
          <div
            ref={pulseRef}
            className="pointer-events-none absolute left-[8%] top-10 hidden h-44 w-44 rounded-full border border-lime-200/14 bg-[radial-gradient(circle,rgba(204,255,74,0.12),transparent_72%)] blur-2xl lg:block"
          />

          <div className="hero-panel relative overflow-hidden rounded-[2.4rem] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(25,29,18,0.88),rgba(11,11,11,0.96)_48%,rgba(18,18,18,0.9)_100%)]" />
            <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_80%_35%,rgba(204,255,74,0.08),transparent_32%)] lg:w-[44%]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between rounded-[2rem] border border-white/6 bg-white/[0.02] p-6 sm:p-8"
              >
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-lime-200/18 bg-lime-200/6 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-200 shadow-[0_0_16px_rgba(204,255,74,0.95)]" />
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-lime-200">
                      Open For Visits
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-[clamp(2.5rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    Bilal Ahmad
                    <span className="mt-2 block text-[0.9rem] font-medium tracking-[0.38em] text-lime-200/74 sm:text-[1rem]">
                      CEO OF ELYSIUM
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[30rem] text-sm leading-7 text-white/62 sm:text-base">
                    Founded in 2018, ELYSIUM continues to grow around a clear
                    belief: strong spaces create stronger people. From the first
                    consultation to the final rep, the goal is premium guidance,
                    elite energy, and real progress.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <motion.a
                    href="tel:03008993232"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="hero-button-primary rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
                  >
                    Call 03008993232
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="hero-button-secondary rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
                  >
                    PWD, Islamabad
                  </motion.a>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {infoCards.map((card) => (
                  <motion.article
                    key={card.label}
                    data-contact-card=""
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    className="group rounded-[1.8rem] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-5 sm:p-6"
                  >
                    <div className="flex h-full flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-200/22 bg-lime-200/8 text-lime-200">
                        {card.icon}
                      </div>

                      <p className="mt-5 text-[0.72rem] uppercase tracking-[0.28em] text-white/45">
                        {card.label}
                      </p>
                      <p className="mt-2 font-display text-[1.9rem] uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-[2.3rem]">
                        {card.value}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-white/58">
                        {card.note}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <circle cx="12" cy="8" r="3.1" />
      <path d="M6 19c1.1-2.9 3.2-4.5 6-4.5s4.9 1.6 6 4.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M7.8 4.8 5.6 7a2 2 0 0 0-.4 2.3c2 4.1 5.4 7.5 9.5 9.5a2 2 0 0 0 2.3-.4l2.2-2.2a1.8 1.8 0 0 0-.2-2.7l-2.7-2a1.8 1.8 0 0 0-2 .1l-1.3 1-1.2-.6a13.2 13.2 0 0 1-2.8-2.8l-.6-1.2 1-1.3a1.8 1.8 0 0 0 .1-2l-2-2.7a1.8 1.8 0 0 0-2.7-.2Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M12 20s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="m12 4 1.6 3.9L17.5 9l-3 2.6.9 4-3.4-2.1-3.4 2.1.9-4L6.5 9l3.9-1.1Z" />
      <path d="M18.5 4.5v3" />
      <path d="M20 6h-3" />
    </svg>
  )
}
