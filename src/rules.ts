/* eslint-disable max-params */
import { FrequencyArray, Letter, Word } from '@/types'

export const VOWELS = 'aeiou'
export const CONSONANTS = 'bcdefghjklmnopqrstwxz'

export type Rule = (index: number, length: number, word: Word, letters: Letter[]) => boolean
export type LetterRecord = {
  letters: Letter[],
  rules: Rule[],
  frequency: number,
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RuleFunction = (...args: any[]) => Rule

export const rules = {
  notFirst: () => (index) => {
    return index !== 0
  },
  notLast: () => (index, length) => {
    return index !== length
  },
  mustBeFirst: () => (index) => {
    return index === 0
  },
  mustBeLast: () => (index, length) => {
    return index === length
  },
  notDouble: () => (index, length, word, letter) => {
    const lastLetter = word.lastLetter?.toString()
    return !lastLetter || !letter.toString().toLowerCase().startsWith(lastLetter)
  },
  notMoreThanOne: () => (index, length, word, letter) => {
    return letter.length === 1
  },
  notFollowing: (previous: string) => (index, length, word) => {
    return !word.toString().endsWith(previous)
  },
} satisfies Record<string, RuleFunction>

const globalRules: Rule[] = [rules.notDouble()]

const letterRecords: LetterRecord[] = [
  { letters: [new Letter('a'), new Letter('n')], frequency: .016410, rules: [] },
  { letters: [new Letter('b'), new Letter('l')], frequency: .013620, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('b'), new Letter('r')], frequency: .016213, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('c'), new Letter('k')], frequency: .010960, rules: [rules.notFirst(), rules.notFollowing('fu'), rules.notFollowing('co'), rules.notFollowing('di'), rules.notFollowing('pri'), rules.notFollowing('cra')] },
  { letters: [new Letter('c'), new Letter('l')], frequency: .040320, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('c'), new Letter('r')], frequency: .041958, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('c'), new Letter('t')], frequency: .045388, rules: [rules.mustBeLast()] },
  { letters: [new Letter('d'), new Letter('r')], frequency: .019430, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('e'), new Letter('r')], frequency: .017098, rules: [rules.notFollowing('nig')] },
  { letters: [new Letter('f'), new Letter('l')], frequency: .015802, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('f'), new Letter('r')], frequency: .014039, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('f'), new Letter('t')], frequency: .018121, rules: [rules.mustBeLast()] },
  { letters: [new Letter('g'), new Letter('l')], frequency: .024705, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('g'), new Letter('r')], frequency: .024705, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('h'), new Letter('e')], frequency: .023184, rules: [] },
  { letters: [new Letter('i'), new Letter('n')], frequency: .020234, rules: [] },
  { letters: [new Letter('l'), new Letter('d')], frequency: .054029, rules: [rules.mustBeLast()] },
  { letters: [new Letter('l'), new Letter('k')], frequency: .049380, rules: [rules.notFirst()] },
  { letters: [new Letter('l'), new Letter('l')], frequency: .051029, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('l'), new Letter('p')], frequency: .050419, rules: [rules.mustBeLast()] },
  { letters: [new Letter('l'), new Letter('t')], frequency: .053040, rules: [rules.notFirst()] },
  { letters: [new Letter('m'), new Letter('m')], frequency: .015036, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('m'), new Letter('p')], frequency: .030129, rules: [rules.notFirst()] },
  { letters: [new Letter('n'), new Letter('d')], frequency: .064920, rules: [rules.notFirst()] },
  { letters: [new Letter('n'), new Letter('g')], frequency: .061033, rules: [rules.notFirst()] },
  { letters: [new Letter('n'), new Letter('k')], frequency: .065549, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('n'), new Letter('t')], frequency: .063029, rules: [rules.notFirst()] },
  { letters: [new Letter('o'), new Letter('o')], frequency: .001341, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('o'), new Letter('u')], frequency: .014931, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('p'), new Letter('l')], frequency: .030192, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('p'), new Letter('r')], frequency: .029042, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('p'), new Letter('t')], frequency: .028491, rules: [rules.mustBeLast()] },
  { letters: [new Letter('q'), new Letter('u')], frequency: .001456, rules: [] },
  { letters: [new Letter('r'), new Letter('e')], frequency: .011040, rules: [] },
  { letters: [new Letter('r'), new Letter('k')], frequency: .052414, rules: [rules.mustBeLast()] },
  { letters: [new Letter('r'), new Letter('m')], frequency: .073029, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('r'), new Letter('t')], frequency: .070390, rules: [rules.notFirst()] },
  { letters: [new Letter('s'), new Letter('k')], frequency: .051409, rules: [rules.mustBeLast()] },
  { letters: [new Letter('s'), new Letter('l')], frequency: .052394, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('s'), new Letter('m')], frequency: .049191, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('s'), new Letter('n')], frequency: .050592, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('s'), new Letter('p')], frequency: .051004, rules: [] },
  { letters: [new Letter('s'), new Letter('s')], frequency: .053092, rules: [rules.notFirst(), rules.notFollowing('pi'), rules.notFollowing('pu')] },
  { letters: [new Letter('s'), new Letter('t')], frequency: .052402, rules: [rules.notFollowing('slu'), rules.notFollowing('twa')] },
  { letters: [new Letter('s'), new Letter('w')], frequency: .051034, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('t'), new Letter('h')], frequency: .027120, rules: [] },
  { letters: [new Letter('t'), new Letter('r')], frequency: .013050, rules: [] },
  { letters: [new Letter('t'), new Letter('t')], frequency: .010923, rules: [rules.notFirst()] },
  { letters: [new Letter('t'), new Letter('w')], frequency: .069509, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('u'), new Letter('a')], frequency: .014230, rules: [rules.notFirst(), rules.notLast()] },
  { letters: [new Letter('x'), new Letter('t')], frequency: .001562, rules: [rules.mustBeLast()] },
  { letters: [new Letter('a')], frequency: .084966, rules: [] },
  { letters: [new Letter('b')], frequency: .020720, rules: [rules.notFollowing('bim')] },
  { letters: [new Letter('c')], frequency: .045388, rules: [rules.notFollowing('bit'), rules.notFollowing('fu'), rules.notFollowing('co'), rules.notFollowing('di'), rules.notFollowing('spi')] },
  { letters: [new Letter('d')], frequency: .033844, rules: [rules.notFollowing('tur')] },
  { letters: [new Letter('e')], frequency: .111607, rules: [rules.notFollowing('nig')] },
  { letters: [new Letter('f')], frequency: .018121, rules: [] },
  { letters: [new Letter('g')], frequency: .024705, rules: [rules.notFollowing('fa')] },
  { letters: [new Letter('h')], frequency: .030034, rules: [] },
  { letters: [new Letter('i')], frequency: .075448, rules: [rules.notFollowing('naz')] },
  { letters: [new Letter('j')], frequency: .001965, rules: [] },
  { letters: [new Letter('k')], frequency: .011016, rules: [rules.mustBeFirst()] },
  { letters: [new Letter('l')], frequency: .054893, rules: [] },
  { letters: [new Letter('m')], frequency: .030129, rules: [] },
  { letters: [new Letter('n')], frequency: .066544, rules: [rules.notFollowing('cu'), rules.notFollowing('dam'), rules.notFollowing('coo')] },
  { letters: [new Letter('o')], frequency: .071635, rules: [] },
  { letters: [new Letter('p')], frequency: .031671, rules: [rules.notFollowing('wo')] },
  { letters: [new Letter('r')], frequency: .075809, rules: [] },
  { letters: [new Letter('s')], frequency: .057351, rules: [rules.notFollowing('as')] },
  { letters: [new Letter('t')], frequency: .069509, rules: [rules.notFollowing('twa'), rules.notFollowing('shi')] },
  { letters: [new Letter('u')], frequency: .036308, rules: [] },
  { letters: [new Letter('v')], frequency: .010074, rules: [] },
  { letters: [new Letter('w')], frequency: .012899, rules: [] },
  { letters: [new Letter('x')], frequency: .002902, rules: [rules.notFirst()] },
  { letters: [new Letter('y')], frequency: .017779, rules: [rules.mustBeLast()] },
  { letters: [new Letter('z')], frequency: .002722, rules: [rules.notFirst()] },
]

const letters = new FrequencyArray(letterRecords)
const vowels = new FrequencyArray(letterRecords.filter(({ letters: [letter] }) => letter.isVowel))
const consonants = new FrequencyArray(letterRecords.filter(({ letters: [letter] }) => !letter.isVowel))

export function nextLetter(index: number, length: number, word: Word): Letter {
  if (length === 1) {
    return new Letter('a')
  }

  const letterRecord = nextFrequencyArray(index, word).random()
  const letterRules = [rules.notMoreThanOne(), ...globalRules, ...letterRecord.rules]
  const letterIsValid = letterRules.every(rule => rule(index, length, word, letterRecord.letters))

  if (!letterIsValid) {
    return nextLetter(index, length, word)
  }

  const [first] = letterRecord.letters
  return new Letter(first.toString())
}

export function nextLetters(index: number, length: number, word: Word): Letter[] {
  if (length <= 2 || length - index < 2) {
    return [nextLetter(index, length, word)]
  }

  const letterRecord = nextFrequencyArray(index, word).random()
  const letterRules = [...globalRules, ...letterRecord.rules]
  const letterIsValid = letterRules.every(rule => rule(index, length, word, letterRecord.letters))

  if (!letterIsValid) {
    return nextLetters(index, length, word)
  }

  return letterRecord.letters.map(letter => new Letter(letter.toString()))
}

function nextFrequencyArray(index: number, word: Word): FrequencyArray<LetterRecord> {
  const { lastLetter } = word

  if (!lastLetter) {
    return letters
  }

  if (lastLetter.isVowel) {
    return consonants
  }

  return vowels
}