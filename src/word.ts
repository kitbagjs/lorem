import { nextLetter } from '@/rules'
import { Word } from '@/types'

export function generateWord(length: number): string {
  const word = new Word()

  for (let index = 0; index < length; index++) {
    word.push(nextLetter(index, length, word))
  }

  return word.toString()
}