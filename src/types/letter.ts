import { VOWELS } from '@/rules'

export class Letter {
  public letter: string

  public constructor(letter: string) {
    this.letter = letter
  }

  public get isVowel(): boolean {
    return VOWELS.includes(this.letter)
  }

  public get length(): number {
    return this.letter.length
  }

  public toString(): string {
    return this.letter
  }

  public toUpperCase(): void {
    this.letter = this.letter.toUpperCase()
  }
}