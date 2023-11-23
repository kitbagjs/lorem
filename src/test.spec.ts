import { test } from 'vitest'
import { generateDictionary } from '@/dictionary'

test('test', () => {
  const dictionary = generateDictionary()

  console.log(dictionary)
})