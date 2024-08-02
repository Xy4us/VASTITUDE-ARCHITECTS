export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, scale: 0, rotate: -150 },
    visible: {
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
}

export const slideInFromTop = (delay: number) => {
  return {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 200, scale: 0 },
    visible: {
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};

export const slideInFromInside = (delay: number) => {
  return {
    hidden: { z: -500, scale: 0 },
    visible: {
      z: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};

export const slideInFromInsideRight = (delay: number) => {
  return {
    hidden: { z: -500, x: -200, scale: 0 },
    visible: {
      z: 0,
      x: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};
