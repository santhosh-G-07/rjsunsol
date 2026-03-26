// Animation timing constants
export const DURATIONS = {
  fast: 0.2,      // Micro-interactions (icon hover)
  medium: 0.3,    // Button hover, card lift
  slow: 0.5,      // Image scales
  entrance: 0.7,  // Scroll-triggered entrances
} as const;

export const EASINGS = {
  entrance: [0.25, 0.46, 0.45, 0.94],
  exit: [0.76, 0, 0.24, 1],
  hover: [0.22, 1, 0.36, 1],
  spring: { type: "spring", stiffness: 300, damping: 20 },
} as const;

// Spacing scale for sections
export const SECTION_SPACING = {
  compact: 'py-16',    // Stats bars, compact sections
  standard: 'py-24',   // Most sections
  generous: 'py-32',   // Hero sections, major dividers
} as const;

// Typography scale
export const TYPOGRAPHY = {
  hero: 'text-[clamp(38px,7vw,88px)]',      // Reduced from 48px min
  sectionHeading: 'text-[clamp(40px,5vw,60px)]',
  cardHeading: 'text-[20px]',
  smallHeading: 'text-[16px]',
} as const;
