import { gaussian } from '@/random'
import { generateWord } from '@/word'

export function generateDictionary(): string[] {
  return new Array(100).fill(null).map(() => {
    const length = gaussian(4.7, 2, 8)

    return generateWord(length)
  })
}