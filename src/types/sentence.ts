import { Word } from '@/types/word'

export class Sentence {
  public readonly words: Word[]

  public constructor(words?: Word[]) {
    this.words = words ?? []
  }

  public push(word: Word): void {
    this.words.push(word)
  }

  public toString(): string {
    return `${this.words.map(word => word.toString()).join(' ')}.`
  }
}