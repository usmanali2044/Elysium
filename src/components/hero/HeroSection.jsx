import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../../assets/elysium-hero-optimized.jpg'
import { SiteHeader } from '../layout/SiteHeader'
import { HeroStatCard } from './HeroStatCard'

gsap.registerPlugin(ScrollTrigger)

const statCards = [
  {
    className: 'left-[16%] top-[24%] xl:left-[20%]',
    delay: 0.35,
    icon: <ClockIcon />,
    label: 'Open',
    side: 'left',
    value: '24/7',
  },
  {
    className: 'right-[15%] top-[26%] xl:right-[19%]',
    delay: 0.45,
    icon: <StrideIcon />,
    label: 'Classes',
    side: 'right',
    value: '18+',
  },
  {
    className: 'bottom-[23%] left-[14%] xl:left-[18%]',
    delay: 0.55,
    icon: <FlameIcon />,
    label: 'Recovery',
    side: 'left',
    value: 'Pro',
  },
  {
    className: 'bottom-[19%] right-[13%] xl:right-[17%]',
    delay: 0.65,
    icon: <DumbbellIcon />,
    label: 'Coaches',
    side: 'right',
    value: '09',
  },
]

const mobileStats = [
  ['Open 24/7', 'Always ready'],
  ['18+ classes', 'Strength, combat, mobility'],
  ['12K results', 'Real member transformations'],
]

const avatarPositions = ['center 12%', 'center 42%', 'center 72%']

const copyTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
}

export function HeroSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const glowRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return undefined
    }

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add(
        {
          compact: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1023px)',
          desktop: '(min-width: 1024px)',
        },
        (context) => {
          const { compact, tablet } = context.conditions
          const imageShift = compact ? -26 : tablet ? -60 : -120
          const glowScale = compact ? 1.08 : 1.18
          const cardShift = compact ? 24 : tablet ? 56 : 108
          const wordShift = compact ? -10 : tablet ? -24 : -52

          gsap.to(imageRef.current, {
            y: imageShift,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })

          gsap.to(glowRef.current, {
            scale: glowScale,
            opacity: 0.95,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          })

          gsap.to('[data-hero-bg-word]', {
            y: wordShift,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })

          gsap.utils.toArray('[data-hero-card]').forEach((card, index) => {
            const side = card.dataset.side === 'left' ? -1 : 1

            gsap.to(card, {
              y: side * -cardShift,
              rotate: side * (index % 2 === 0 ? 12 : 6),
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'bottom top',
                scrub: 1.4,
              },
            })
          })
        },
      )
    }, sectionRef)

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [prefersReducedMotion])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate h-screen overflow-hidden bg-[#050505]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] h-[36rem] bg-[radial-gradient(circle,rgba(215,255,63,0.18),transparent_60%)] blur-3xl" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-[38%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),rgba(255,255,255,0.04)_38%,transparent_72%)] opacity-70 blur-2xl md:h-[34rem] md:w-[34rem] xl:h-[40rem] xl:w-[40rem]"
      />

      <div className="relative mx-auto flex h-screen max-w-[1600px] flex-col px-4 pb-3 sm:px-6 sm:pb-4 lg:px-10">
        <SiteHeader />

        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <SideRail align="left" label="Power Next" />
          <SideRail align="right" label="Elite Form" />

          <div className="relative z-10 mx-auto mt-1 flex min-h-0 w-full max-w-[1380px] flex-1 flex-col items-center justify-between md:mt-2">
            <div className="relative z-30 flex min-h-0 w-full flex-1 items-end justify-center">
              {statCards.map((card) => (
                <HeroStatCard key={card.label} {...card} />
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute inset-x-0 top-[16%] z-20 hidden justify-center md:flex"
                aria-hidden="true"
              >
                <div
                  data-hero-bg-word=""
                  className="relative -translate-x-[4%] lg:-translate-x-[6%]"
                >
                  <span className="font-display block whitespace-nowrap text-[clamp(6.2rem,15.5vw,13.5rem)] uppercase leading-none tracking-[0.14em] text-white/[0.035] [text-shadow:0_0_35px_rgba(204,255,74,0.08)]">
                    ELYSIUM
                  </span>
                  <span className="hero-outline absolute inset-0 block whitespace-nowrap text-[clamp(6.2rem,15.5vw,13.5rem)] uppercase leading-none tracking-[0.14em] opacity-70">
                    ELYSIUM
                  </span>
                </div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-30 mx-auto flex h-[clamp(26rem,62vh,45rem)] max-w-[88vw] items-end justify-center sm:h-[clamp(29rem,64vh,47rem)] lg:h-[clamp(33rem,72vh,54rem)]"
              >
                <div className="pointer-events-none absolute inset-x-[12%] bottom-[11%] h-[16%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.88),transparent_74%)] blur-xl" />
                <div className="pointer-events-none absolute inset-x-0 top-[4%] h-[90%] rounded-[40%] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%,rgba(255,255,255,0.06)_74%,transparent)] blur-3xl" />
                <img
                  ref={imageRef}
                  src={heroImage}
                  alt="Bodybuilder standing in a gym"
                  className="relative z-10 h-full w-auto max-w-full object-contain [filter:grayscale(1)_contrast(1.1)_brightness(0.82)]"
                />
              </motion.figure>
            </div>

            <div className="relative z-30 mt-2 flex w-full flex-col gap-3 pb-2 md:hidden">
              {mobileStats.map(([title, subtitle]) => (
                <div
                  key={title}
                  className="hero-panel rounded-[1.4rem] px-4 py-3"
                >
                  <p className="font-display text-[1.2rem] uppercase tracking-[0.06em] text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-white/62">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="relative z-30 mt-2 grid w-full gap-3 pb-1 md:-mt-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:-mt-6">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...copyTransition, delay: 0.5 }}
                className="flex items-end gap-4 self-start md:self-end"
              >
                <div className="flex -space-x-3">
                  {avatarPositions.map((position) => (
                    <div
                      key={position}
                      className="size-[3.1rem] overflow-hidden rounded-full border-2 border-black bg-zinc-900 shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                    >
                      <img
                        src={heroImage}
                        alt=""
                        className="h-full w-full object-cover grayscale"
                        style={{ objectPosition: position }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-display text-[2.4rem] leading-none tracking-[-0.04em] text-white lg:text-[2.8rem]">
                    12K+
                  </p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-white/62 lg:text-[0.82rem]">
                    Stronger members
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...copyTransition, delay: 0.6 }}
                className="justify-self-start md:justify-self-end"
              >
                <p className="mb-3 max-w-[26rem] text-xs leading-6 text-white/68 md:ml-auto md:text-right lg:text-sm">
                  Precision coaching, premium recovery, and a training floor
                  designed to make every session feel cinematic.
                </p>
                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <motion.a
                    href="#"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="hero-button-primary rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
                  >
                    Start Training
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="hero-button-secondary rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
                  >
                    View Programs
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SideRail({ align, label }) {
  const letters = label.split('')

  return (
    <div
      className={`pointer-events-none absolute top-1/2 z-40 hidden -translate-y-1/2 xl:flex ${
        align === 'left' ? 'left-2' : 'right-2'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4 text-white/26">
        {letters.map((letter, index) => (
          <span
            key={`${label}-${index}`}
            className="font-display text-[1.15rem] uppercase tracking-[0.45em]"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v4.8l3 1.8" />
    </svg>
  )
}

function StrideIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M13 5.5a1.8 1.8 0 1 0 0.01 0Z" />
      <path d="m9 21 1.6-5 2.8-2.4 2.4 1.2 1.5 3.2" />
      <path d="m10.2 13.8-2.6-1.4L5 10" />
      <path d="m14 9.2 2.1 1.8H19" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M12 3c1.4 3 .3 4.8-.7 6 2 .4 4.7 2.8 4.7 6A5.8 5.8 0 0 1 10 21a5 5 0 0 1-4-1.8 6.9 6.9 0 0 1-1.4-4.5c0-3.1 1.7-5 4-6.7.3 1.6 1 2.6 1.9 3.1C11.6 9.5 12.7 7.2 12 3Z" />
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
