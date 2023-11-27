import { gaussian } from '@/random'
import { nextLetters } from '@/rules'
import { Word, Sentence, Paragraph } from '@/types'

export type GenerateWordOptions = { length?: number, capitalize?: boolean }
function defaultGenerateWordOptions(): Required<GenerateWordOptions> {
  return {
    length: Math.floor(gaussian(4.7, 2, 8)),
    capitalize: false,
  }
}
export function generateWord(options: GenerateWordOptions = {}): Word {
  return buildWord({ ...defaultGenerateWordOptions(), ...options }, new Word())
}

function buildWord(options: Required<GenerateWordOptions>, word: Word): Word {
  const { length, capitalize } = options
  const letters = nextLetters(word.length, length, word)

  if (word.length === 0 && capitalize) {
    const [first] = letters

    first.toUpperCase()
  }

  word.push(...letters)

  if (word.length < length) {
    return buildWord(options, word)
  }

  return word
}

export type GenerateSentenceOptions = { wordCount?: number }
function defaultGenerateSentenceOptions(): Required<GenerateSentenceOptions> {
  return {
    wordCount: Math.floor(gaussian(15, 10, 20)),
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
    sentenceCount: Math.floor(gaussian(4.5, 2, 8)),
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