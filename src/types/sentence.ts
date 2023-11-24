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
    return `${capitalize(this.words.map(word => word.toString()).join(' '))}.`
  }
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}