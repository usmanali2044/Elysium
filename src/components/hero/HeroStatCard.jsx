import { motion } from 'framer-motion'

export function HeroStatCard({
  className = '',
  delay = 0,
  icon,
  label,
  side = 'left',
  value,
}) {
  const initialRotate = side === 'left' ? -10 : 10

  return (
    <motion.article
      data-hero-card=""
      data-side={side}
      initial={{
        opacity: 0,
        y: 26,
        rotate: initialRotate + (side === 'left' ? -4 : 4),
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: initialRotate,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        rotate: side === 'left' ? -6 : 6,
      }}
      className={`hero-panel absolute hidden w-[132px] rounded-[1.75rem] p-4 lg:block ${className}`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-[#050505]">
        {icon}
      </div>
      <p className="font-body text-xs uppercase tracking-[0.08em] text-white/70">
        {label}
      </p>
      <p className="mt-2 font-display text-[1.9rem] font-semibold uppercase tracking-[0.05em] text-white">
        {value}
      </p>
    </motion.article>
  )
}
