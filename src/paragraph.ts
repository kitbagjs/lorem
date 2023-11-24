import { gaussian } from '@/random'
import { generateSentence } from '@/sentence'
import { Paragraph } from '@/types'

export function generateParagraph(sentenceCount?: number): string {
  const sentences = sentenceCount ?? gaussian(4.5, 2, 8)
  const paragraph = new Paragraph()

  for (let index = 0; index < sentences; index++) {
    const sentence = generateSentence()

    paragraph.push(sentence)
  }

  return paragraph.toString()
}