export class Letter {
  public letter: string

  public constructor(letter: string) {
    this.letter = letter
  }

  public get isVowel(): boolean {
    return 'aeiou'.includes(this.letter)
  }

  public toString(): string {
    return this.letter
  }

  public isSame(letter: Letter): boolean {
    return letter.toString() === this.toString()
  }
}