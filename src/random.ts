/* eslint-disable id-length */
export function gaussian(mean: number, rangeMin: number, rangeMax: number): number {
  let u = 0,
    v = 0
  while (u === 0) {
    u = Math.random()
  }
  while (v === 0) {
    v = Math.random()
  }
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

  // Scale and shift the number to adjust the mean and range
  num = num * (rangeMax - rangeMin) / 6 + mean

  // Ensure the number is within the desired range
  return Math.min(Math.max(num, rangeMin), rangeMax)
}

export function number(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function boolean(likelihood = 0.5): boolean {
  return Math.random() < likelihood
}