import { Sentence } from '@/types/sentence'

export class Paragraph {
  public readonly sentences: Sentence[]

  public constructor(sentences?: Sentence[]) {
    this.sentences = sentences ?? []
  }

  public push(sentence: Sentence): void {
    this.sentences.push(sentence)
  }

  public toString(): string {
    return `${this.sentences.map(sentence => sentence.toString()).join('  ')}\n\n`
  }
}