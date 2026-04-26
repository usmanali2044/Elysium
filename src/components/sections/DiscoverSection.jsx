import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    title: 'Cardio Training',
    description:
      'Boost endurance and heart health with high-energy cardio sessions designed to keep you moving.',
    icon: <HeartIcon />,
  },
  {
    title: 'Strength Build',
    description:
      'Develop power and resilience through expert-guided strength training tailored to all fitness levels.',
    icon: <FlexIcon />,
    featured: true,
  },
  {
    title: 'Fat Loss',
    description:
      'Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.',
    icon: <DropIcon />,
  },
  {
    title: 'HIIT Workouts',
    description:
      'Maximize calorie burn and improve fitness with short, intense high-intensity interval training sessions.',
    icon: <FlameIcon />,
  },
  {
    title: 'Mobility Flow',
    description:
      'Unlock cleaner movement patterns with flexibility work that supports performance and recovery.',
    icon: <OrbitIcon />,
  },
  {
    title: 'Boxing Engine',
    description:
      'Blend conditioning, speed, and reaction drills into a sharper, more athletic training system.',
    icon: <BoltIcon />,
  },
]

const totalPages = 3

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
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

export function DiscoverSection() {
  const railRef = useRef(null)
  const [page, setPage] = useState(0)

  const syncPage = () => {
    const rail = railRef.current

    if (!rail) {
      return
    }

    const maxScroll = rail.scrollWidth - rail.clientWidth

    if (maxScroll <= 0) {
      setPage(0)
      return
    }

    const nextPage = Math.round((rail.scrollLeft / maxScroll) * (totalPages - 1))
    setPage(nextPage)
  }

  const scrollToPage = (nextPage) => {
    const rail = railRef.current

    if (!rail) {
      return
    }

    const maxScroll = rail.scrollWidth - rail.clientWidth
    const left = (maxScroll / (totalPages - 1)) * nextPage

    rail.scrollTo({
      left,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#050505] px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.65)_55%,rgba(5,5,5,0)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,74,0.12),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1560px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <motion.p
            variants={reveal}
            className="font-body text-[0.72rem] uppercase tracking-[0.34em] text-lime-200/58 sm:text-[0.8rem] sm:tracking-[0.42em]"
          >
            Programs
          </motion.p>
          <motion.h2
            custom={1}
            variants={reveal}
            className="font-display mt-4 text-[clamp(2.7rem,12vw,6.6rem)] uppercase leading-[0.9] tracking-[-0.05em] text-white"
          >
            Discover
            <span className="block text-lime-200">What Sets Us Apart</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={reveal}
            className="mx-auto mt-5 max-w-[23rem] text-sm leading-7 text-white/66 sm:mt-6 sm:max-w-[46rem] sm:text-base"
          >
            We deliver a fitness experience that feels truly one-of-a-kind.
            Explore how ELYSIUM helps you move faster, train smarter, and grow
            stronger with purpose.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14"
        >
          <div
            ref={railRef}
            onScroll={syncPage}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 [scroll-padding-inline:1rem] sm:gap-6 sm:px-0 sm:[scroll-padding-inline:0px]"
          >
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`shrink-0 snap-center sm:snap-start rounded-[1.8rem] border p-5 sm:rounded-[2rem] sm:p-7 lg:p-8 ${
                  plan.featured
                    ? 'border-lime-200/26 bg-[linear-gradient(180deg,rgba(88,96,60,0.9),rgba(49,54,35,0.86))] shadow-[0_22px_44px_rgba(0,0,0,0.26)]'
                    : 'border-white/6 bg-[linear-gradient(180deg,rgba(23,23,19,0.88),rgba(13,13,13,0.92))]'
                } w-[78vw] min-w-[16.5rem] max-w-[18rem] sm:w-[20rem] sm:max-w-none lg:w-[23rem]`}
              >
                <div className="flex h-full min-h-[14.5rem] flex-col sm:min-h-[15rem]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b0d10] text-lime-200 shadow-[inset_0_0_0_1px_rgba(204,255,74,0.16)] sm:h-12 sm:w-12">
                    {plan.icon}
                  </div>

                  <h3 className="font-body mt-5 text-[1.35rem] font-semibold leading-tight text-white sm:mt-6 sm:text-[1.75rem]">
                    {plan.title}
                  </h3>

                  <p className="mt-4 max-w-[15rem] text-[0.95rem] leading-7 text-white/62 sm:mt-5 sm:max-w-[16rem] sm:text-[1.02rem]">
                    {plan.description}
                  </p>

                  <div className="mt-auto pt-6 sm:pt-8">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-full bg-[#c7f51b] px-5 py-2.5 text-sm font-bold text-[#070707] transition hover:-translate-y-0.5 sm:px-6 sm:py-3"
                    >
                      See Plan
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 rounded-full transition ${
                  page === index ? 'w-9 bg-[#c7f51b]' : 'w-3 bg-white/24'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M4 13h3l2-3 3 6 2-4h6" />
      <path d="M20 7.8A3.8 3.8 0 0 0 13.8 5L12 6.9 10.2 5A3.8 3.8 0 0 0 4 7.8c0 5.2 8 9.8 8 9.8s8-4.6 8-9.8Z" />
    </svg>
  )
}

function FlexIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M6 15.5c1.1.8 2.6 1.2 4.2 1.2 2.6 0 4.8-1.3 5.8-3.2l1.9.2" />
      <path d="M6.5 11.4c.4-2.8 2.8-5 5.8-5 2.6 0 4.8 1.4 5.8 3.4" />
      <path d="M10 10.2c.8.6 1.4 1.8 1.4 3.1V15" />
      <path d="M4 12.5h3" />
    </svg>
  )
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M12 4c3.4 4 5.1 6.8 5.1 9.3A5.1 5.1 0 0 1 12 18.4a5.1 5.1 0 0 1-5.1-5.1C6.9 10.8 8.6 8 12 4Z" />
      <path d="M9.5 13.2c.3 1.3 1.3 2.3 2.6 2.6" />
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

function OrbitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <circle cx="12" cy="12" r="2.2" />
      <path d="M19 12c0 3.9-3.1 7-7 7S5 15.9 5 12s3.1-7 7-7" />
      <path d="M12 5c3.9 0 7 3.1 7 7" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="m13 3-7 10h5l-1 8 8-11h-5Z" />
    </svg>
  )
}
