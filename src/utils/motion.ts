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

export const slideInFromTopInside = (delay: number) => {
  return {
    hidden: { z: -500, scale: 0, y: -300 },
    visible: {
      z: 0,
      scale: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  };
};
