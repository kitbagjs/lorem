import { gaussian } from '@/random'
import { Sentence } from '@/types'
import { generateWord } from '@/word'

export function generateSentence(wordCount?: number): Sentence {
  const words = wordCount ?? gaussian(15, 10, 20)
  const sentence = new Sentence()

  for (let index = 0; index < words; index++) {
    const word = generateWord()

    sentence.push(word)
  }

  return sentence
}