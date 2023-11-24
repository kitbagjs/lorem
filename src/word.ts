import { gaussian } from '@/random'
import { nextLetter } from '@/rules'
import { Letter, Word } from '@/types'

export function generateWord(wordLength?: number): Word {
  const length = wordLength ?? gaussian(4, 1, 8)
  const word = new Word()

  if (length === 1) {
    word.push(new Letter('a'))

    return word
  }

  for (let index = 0; index < length; index++) {
    word.push(nextLetter(index, length, word))
  }

  return word
}