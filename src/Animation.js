export const opacityType = {
  hidden: {
    opacity: 0,

  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',

    }

  }
}

export const slideType = {
  hidden: {
    opacity: 0,
    x: -200

  },
  animate: {
    opacity: 1,
    x: 0,
  }
}
