import { gaussian } from '@/random'
import { nextLetter } from '@/rules'
import { Word, Sentence, Paragraph } from '@/types'

export type GenerateWordOptions = { length?: number, capitalize?: boolean }
function defaultGenerateWordOptions(): Required<GenerateWordOptions> {
  return {
    length: gaussian(4, 1, 8),
    capitalize: false,
  }
}
export function generateWord(options: GenerateWordOptions = {}): Word {
  const { length, capitalize } = { ...defaultGenerateWordOptions(), ...options }
  const word = new Word()

  for (let index = 0; index < length; index++) {
    const letter = nextLetter(index, length, word)
    if (index === 0 && capitalize) {
      letter.toUpperCase()
    }

    word.push(letter)
  }

  return word
}

export type GenerateSentenceOptions = { wordCount?: number }
function defaultGenerateSentenceOptions(): Required<GenerateSentenceOptions> {
  return {
    wordCount: gaussian(15, 10, 20),
  }
}
export function generateSentence(options: GenerateSentenceOptions = {}): Sentence {
  const { wordCount } = { ...defaultGenerateSentenceOptions(), ...options }
  const sentence = new Sentence()

  for (let index = 0; index < wordCount; index++) {
    const word = generateWord({ capitalize: index === 0 })

    sentence.push(word)
  }

  return sentence
}

export type GenerateParagraphOptions = { sentenceCount?: number }
function defaultGenerateParagraphOptions(): Required<GenerateParagraphOptions> {
  return {
    sentenceCount: gaussian(4.5, 2, 8),
  }
}
export function generateParagraph(options: GenerateParagraphOptions = {}): string {
  const { sentenceCount } = { ...defaultGenerateParagraphOptions(), ...options }
  const paragraph = new Paragraph()

  for (let index = 0; index < sentenceCount; index++) {
    const sentence = generateSentence()

    paragraph.push(sentence)
  }

  return paragraph.toString()
}