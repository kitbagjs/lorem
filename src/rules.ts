/* eslint-disable max-params */
import { pick } from '@/random'
import { Letter, Word } from '@/types'

export type Rule = (index: number, length: number, word: Word, letter: Letter) => boolean
export type LetterRecord = {
  letter: Letter,
  rules: Rule[],
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
    return !word.lastLetter?.isSame(letter)
  },
  notCommon: () => (index, length, word, letter) => {
    return !word.letters.includes(letter)
  },
  wontFollow: (previous: string) => (index, length, word) => {
    return !word.toString().endsWith(previous)
  },
} satisfies Record<string, RuleFunction>

const letterRecords: (LetterRecord & { frequency: number })[] = [
  { letter: new Letter('an'), frequency: .016410, rules: [] },
  { letter: new Letter('bl'), frequency: .013620, rules: [rules.mustBeFirst()] },
  { letter: new Letter('br'), frequency: .016213, rules: [rules.mustBeFirst()] },
  { letter: new Letter('ck'), frequency: .010960, rules: [rules.notFirst()] },
  { letter: new Letter('cl'), frequency: .403201, rules: [rules.mustBeFirst()] },
  { letter: new Letter('cr'), frequency: .419583, rules: [rules.mustBeFirst()] },
  { letter: new Letter('ct'), frequency: .045388, rules: [rules.mustBeLast()] },
  { letter: new Letter('dr'), frequency: .019430, rules: [rules.mustBeFirst()] },
  { letter: new Letter('er'), frequency: .017098, rules: [] },
  { letter: new Letter('fl'), frequency: .015802, rules: [rules.mustBeFirst()] },
  { letter: new Letter('fr'), frequency: .014039, rules: [rules.mustBeFirst()] },
  { letter: new Letter('ft'), frequency: .018121, rules: [rules.mustBeLast()] },
  { letter: new Letter('gl'), frequency: .024705, rules: [rules.mustBeFirst()] },
  { letter: new Letter('gr'), frequency: .024705, rules: [rules.mustBeFirst()] },
  { letter: new Letter('he'), frequency: .023184, rules: [] },
  { letter: new Letter('in'), frequency: .020234, rules: [] },
  { letter: new Letter('ld'), frequency: .054029, rules: [rules.mustBeLast()] },
  { letter: new Letter('lk'), frequency: .049380, rules: [rules.notFirst()] },
  { letter: new Letter('ll'), frequency: .051029, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('lp'), frequency: .050419, rules: [rules.mustBeLast()] },
  { letter: new Letter('lt'), frequency: .053040, rules: [rules.notFirst()] },
  { letter: new Letter('mm'), frequency: .015036, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('mp'), frequency: .030129, rules: [rules.notFirst()] },
  { letter: new Letter('nd'), frequency: .064920, rules: [rules.notFirst()] },
  { letter: new Letter('ng'), frequency: .061033, rules: [rules.notFirst()] },
  { letter: new Letter('nk'), frequency: .065549, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('nt'), frequency: .063029, rules: [rules.notFirst()] },
  { letter: new Letter('oo'), frequency: .001341, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('ou'), frequency: .014931, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('pl'), frequency: .030192, rules: [rules.mustBeFirst()] },
  { letter: new Letter('pr'), frequency: .029042, rules: [rules.mustBeFirst()] },
  { letter: new Letter('pt'), frequency: .028491, rules: [rules.mustBeLast()] },
  { letter: new Letter('qu'), frequency: .001456, rules: [] },
  { letter: new Letter('re'), frequency: .011040, rules: [] },
  { letter: new Letter('rk'), frequency: .052414, rules: [rules.mustBeLast()] },
  { letter: new Letter('rm'), frequency: .073029, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('rt'), frequency: .070390, rules: [rules.notFirst()] },
  { letter: new Letter('sk'), frequency: .051409, rules: [rules.mustBeLast()] },
  { letter: new Letter('sl'), frequency: .052394, rules: [rules.mustBeFirst()] },
  { letter: new Letter('sm'), frequency: .049191, rules: [rules.mustBeFirst()] },
  { letter: new Letter('sn'), frequency: .050592, rules: [rules.mustBeFirst()] },
  { letter: new Letter('sp'), frequency: .051004, rules: [] },
  { letter: new Letter('ss'), frequency: .053092, rules: [rules.notFirst()] },
  { letter: new Letter('st'), frequency: .052402, rules: [] },
  { letter: new Letter('sw'), frequency: .051034, rules: [rules.mustBeFirst()] },
  { letter: new Letter('th'), frequency: .027120, rules: [] },
  { letter: new Letter('tr'), frequency: .013050, rules: [] },
  { letter: new Letter('tt'), frequency: .010923, rules: [rules.notFirst()] },
  { letter: new Letter('tw'), frequency: .069509, rules: [rules.mustBeFirst()] },
  { letter: new Letter('ua'), frequency: .014230, rules: [rules.notFirst(), rules.notLast()] },
  { letter: new Letter('xt'), frequency: .001562, rules: [rules.mustBeLast()] },
  { letter: new Letter('a'), frequency: .084966, rules: [] },
  { letter: new Letter('b'), frequency: .020720, rules: [] },
  { letter: new Letter('c'), frequency: .045388, rules: [] },
  { letter: new Letter('d'), frequency: .033844, rules: [] },
  { letter: new Letter('e'), frequency: .111607, rules: [] },
  { letter: new Letter('f'), frequency: .018121, rules: [] },
  { letter: new Letter('g'), frequency: .024705, rules: [] },
  { letter: new Letter('h'), frequency: .030034, rules: [] },
  { letter: new Letter('i'), frequency: .075448, rules: [] },
  { letter: new Letter('j'), frequency: .001965, rules: [] },
  { letter: new Letter('k'), frequency: .011016, rules: [] },
  { letter: new Letter('l'), frequency: .054893, rules: [] },
  { letter: new Letter('m'), frequency: .030129, rules: [] },
  { letter: new Letter('n'), frequency: .066544, rules: [] },
  { letter: new Letter('o'), frequency: .071635, rules: [] },
  { letter: new Letter('p'), frequency: .031671, rules: [] },
  { letter: new Letter('r'), frequency: .075809, rules: [] },
  { letter: new Letter('s'), frequency: .057351, rules: [] },
  { letter: new Letter('t'), frequency: .069509, rules: [] },
  { letter: new Letter('u'), frequency: .036308, rules: [] },
  { letter: new Letter('v'), frequency: .010074, rules: [] },
  { letter: new Letter('w'), frequency: .012899, rules: [] },
  { letter: new Letter('x'), frequency: .002902, rules: [rules.notFirst(), rules.notCommon()] },
  { letter: new Letter('y'), frequency: .017779, rules: [rules.mustBeLast()] },
  { letter: new Letter('z'), frequency: .002722, rules: [rules.notFirst()] },
]

export const consonants = letterRecords
  .filter(({ letter }) => !letter.isVowel)
  .reduce<LetterRecord[]>((value, { letter, rules, frequency }) => {
  const letters = new Array(Math.floor(frequency * 10000)).fill(null).map(() => ({ letter, rules }))

  return value.concat(letters)
}, [])

export const vowels = letterRecords
  .filter(({ letter }) => letter.isVowel)
  .reduce<LetterRecord[]>((value, { letter, rules, frequency }) => {
  const letters = new Array(Math.floor(frequency * 10000)).fill(null).map(() => ({ letter, rules }))

  return value.concat(letters)
}, [])

export const letters = [...consonants, ...vowels]

export function nextLetter(index: number, length: number, word: Word): Letter {
  const possibleLetters = getLetterGroup(index, word)
  const possibleLetter = pick(possibleLetters)
  const letterRules = [rules.notDouble(), ...possibleLetter.rules]

  if (letterRules.some(rule => !rule(index, length, word, possibleLetter.letter))) {
    return nextLetter(index, length, word)
  }

  return possibleLetter.letter
}

function getLetterGroup(index: number, word: Word): LetterRecord[] {
  if (index === 0) {
    return letters
  }

  if (word.lastLetter?.isVowel) {
    return consonants
  }

  return vowels
}