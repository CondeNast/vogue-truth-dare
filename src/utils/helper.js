// min included, max excluded
export const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min) + min)
