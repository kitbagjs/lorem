import { Letter } from '@/types/letter'

export class Word {
  public readonly letters: Letter[]

  public constructor(letters?: Letter[]) {
    this.letters = letters ?? []
  }

  public get lastLetter(): Letter | undefined {
    const value = this.toString().slice(-1)

    return new Letter(value)
  }

  public get length(): number {
    return this.letters.length
  }

  public push(...letters: Letter[]): void {
    this.letters.push(...letters)
  }

  public toString(): string {
    return this.letters.map(letter => letter.toString()).join('')
  }
}