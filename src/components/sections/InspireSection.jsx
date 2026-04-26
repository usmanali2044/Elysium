import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import inspireImage from '../../assets/elysium-inspire-optimized.jpg'

gsap.registerPlugin(ScrollTrigger)

const featureGroups = [
  {
    title: 'Nutrition Guidance',
    description: 'Meal strategy built to support power, recovery, and consistency.',
    icon: <LeafIcon />,
  },
  {
    id: 'coaches',
    title: 'Expert Trainers',
    description: 'Coaches who balance discipline, technique, and long-term growth.',
    icon: <CoachIcon />,
  },
  {
    title: 'Progress Tracking',
    description: 'Clear milestones that make daily effort feel measurable and real.',
    icon: <ChartIcon />,
  },
  {
    title: 'Premium Membership',
    description: 'Elevated access, recovery perks, and a higher standard of training.',
    icon: <CrownIcon />,
  },
  {
    title: 'Community Support',
    description: 'A motivating environment that keeps momentum high every week.',
    icon: <SparkIcon />,
  },
  {
    title: 'Next-Level Spaces',
    description: 'Immersive rooms designed for focus, grit, and high-performance flow.',
    icon: <DumbbellIcon />,
  },
]

const focusStats = [
  ['Mindset', '98%'],
  ['Recovery', '24/7'],
  ['Discipline', 'Elite'],
]

const revealUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.08 * index,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function InspireSection() {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const imageRef = useRef(null)
  const glowRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        {
          y: 90,
          opacity: 0.55,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            end: 'top 42%',
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        {
          y: 48,
          scale: 0.96,
        },
        {
          y: -38,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        },
      )

      gsap.fromTo(
        glowRef.current,
        {
          opacity: 0.18,
          scale: 0.85,
        },
        {
          opacity: 0.62,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom top',
            scrub: 1.2,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050505] px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.78)_55%,#050505_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.18),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1460px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <motion.p
            variants={revealUp}
            className="font-body text-[0.8rem] uppercase tracking-[0.42em] text-lime-200/62"
          >
            Elysium Advantage
          </motion.p>
          <motion.h2
            custom={1}
            variants={revealUp}
            className="font-display mt-4 text-[clamp(3rem,7vw,6.4rem)] uppercase leading-[0.92] tracking-[-0.05em] text-white"
          >
            Inspired To
            <span className="block text-lime-200">Inspire Your Best Self</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={revealUp}
            className="mx-auto mt-6 max-w-[48rem] text-sm leading-7 text-white/66 sm:text-base"
          >
            We are your partner in building a stronger body, sharper focus,
            and deeper confidence through coaching that actually lasts.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 sm:mt-16">
          <div
            ref={glowRef}
            className="pointer-events-none absolute bottom-10 right-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.16),transparent_70%)] blur-3xl"
          />

          <div
            ref={panelRef}
            className="hero-panel relative overflow-hidden rounded-[2.25rem] px-5 py-6 sm:px-8 sm:py-8 lg:min-h-[33rem] lg:px-12 lg:py-12"
          >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(30,34,22,0.62),rgba(10,10,10,0.92)_52%,rgba(10,10,10,0.7)_100%)]" />
            <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_80%_35%,rgba(214,255,72,0.08),transparent_28%)] lg:w-[48%]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-stretch">
              <div className="flex flex-col gap-8">
                <SensoryFocusCard />

                <div className="grid gap-4 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
                  {featureGroups.map((feature, index) => (
                    <motion.article
                    key={feature.title}
                    id={feature.id}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={revealUp}
                    className="group scroll-mt-24 rounded-[1.6rem] border border-white/6 bg-white/[0.03] px-4 py-4 transition hover:border-lime-200/20 hover:bg-white/[0.045] sm:px-5 lg:border-transparent lg:bg-transparent lg:px-0 lg:py-3"
                  >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-200/25 bg-lime-200/8 text-lime-200">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-body text-lg font-semibold text-white sm:text-[1.45rem]">
                            {feature.title}
                          </h3>
                          <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/58">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto flex w-full max-w-[24rem] items-end justify-center self-end sm:max-w-[28rem] lg:max-w-[33rem]"
              >
                <div className="pointer-events-none absolute bottom-[4%] h-24 w-[88%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.86),transparent_72%)] blur-2xl" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%,transparent_76%,rgba(255,255,255,0.06))] blur-2xl" />
                <img
                  ref={imageRef}
                  src={inspireImage}
                  alt="Black and white portrait of an athlete competing with a blindfold"
                  className="relative z-10 h-auto w-full object-contain [filter:grayscale(1)_contrast(1.12)_brightness(0.88)] lg:translate-x-6 lg:translate-y-4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SensoryFocusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="hero-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(214,255,72,0.08),transparent_34%,rgba(255,255,255,0.02)_100%)]" />
      <div className="pointer-events-none absolute -left-12 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.16),transparent_72%)] blur-2xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[26rem]">
          <p className="font-body text-[0.72rem] uppercase tracking-[0.34em] text-lime-200/58">
            Elysium Focus Mode
          </p>
          <h3 className="font-display mt-3 text-[2.2rem] uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-[2.8rem]">
            Precision Under
            <span className="block text-lime-200">Pressure</span>
          </h3>
          <p className="mt-3 max-w-[24rem] text-sm leading-6 text-white/60">
            We train control, awareness, and confidence so performance holds
            steady even when conditions get harder.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-lime-200/30"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.04, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[14%] rounded-full border border-lime-200/18"
            />
            <motion.div
              animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.92, 1.08, 0.92] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-3 w-3 rounded-full bg-lime-200 shadow-[0_0_18px_rgba(214,255,72,0.85)]"
            />
            <div className="relative flex h-[54%] w-[54%] items-center justify-center rounded-full border border-lime-200/22 bg-black/35 backdrop-blur">
              <span className="font-display text-[1.9rem] uppercase tracking-[0.08em] text-white">
                01
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            {focusStats.map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.55,
                  delay: 0.18 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/45">
                  {label}
                </p>
                <p className="mt-1 font-display text-[1.35rem] uppercase tracking-[0.04em] text-white">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M6 15c0-4.8 3.6-8.5 9-9 0 5.4-2.9 9-7.5 9.8" />
      <path d="M5 8c4.8.2 8.1 3.3 8.5 8.5C8.2 16.5 5 13.4 5 8Z" />
    </svg>
  )
}

function CoachIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <circle cx="12" cy="7" r="2.2" />
      <path d="M7 20v-2.2c0-2.4 2.2-4.3 5-4.3s5 1.9 5 4.3V20" />
      <path d="M4 10.5h3" />
      <path d="M17 10.5h3" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M5 19V9" />
      <path d="M12 19V5" />
      <path d="M19 19v-7" />
      <path d="M4 19h16" />
      <path d="m6.5 8.2 4.2-2.7 3.2 2.2 4.6-2.8" />
    </svg>
  )
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="m4 18 1.6-8 4.1 3.5L12 8l2.3 5.5 4.1-3.5L20 18Z" />
      <path d="M5 18h14" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="m12 4 1.6 3.9L17.5 9l-3 2.6.9 4-3.4-2.1-3.4 2.1.9-4L6.5 9l3.9-1.1Z" />
      <path d="M5 19c1.3-1.7 3-2.6 5-2.6" />
      <path d="M19 19c-1.3-1.7-3-2.6-5-2.6" />
    </svg>
  )
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M4 9v6" />
      <path d="M7 7v10" />
      <path d="M17 7v10" />
      <path d="M20 9v6" />
      <path d="M7 12h10" />
    </svg>
  )
}
