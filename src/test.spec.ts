import { test } from 'vitest'
import { generateParagraph } from '@/paragraph'

test('test', () => {
  const value = new Array(4).fill(null).map(() => generateParagraph())

  console.log(value.map(paragraph => paragraph.toString()).join(''))
})