import { DICTIONARY } from "../constants/dictionary";

type Params = {
  inputText: string
}

/**
 * Finds all valid English words in a dictionary that can be composed of some or all
 * of the characters in the given input string, regardless of order. The search is case-insensitive.
 */
export const getListOfValidWords = ({inputText}: Params) => {
  return findWords(inputText.toLowerCase(), DICTIONARY);
}

/**
 * Creates a map where the keys are the characters from the input string,
 * and the values are the number of times each character appears in the string.
 * @param {string} input - The string to analyze.
 * @returns {Map<string, number>} - The frequency map of the string.
 */
function createFrequencyMap(input: string): Map<string, number> {
  let frequencyMap = new Map<string, number>();
  for (let char of input) {
      if (frequencyMap.has(char)) {
          frequencyMap.set(char, frequencyMap.get(char)! + 1);
      } else {
          frequencyMap.set(char, 1);
      }
  }
  return frequencyMap;
}

/**
* Checks if a word can be formed from a given input string.
* The word can be formed if every character in the word appears in the input string
* at least as many times as it appears in the word.
* @param {Map<string, number>} inputMap - The frequency map of the input string.
* @param {Map<string, number>} wordMap - The frequency map of the word.
* @returns {boolean} - Whether the word can be formed or not.
*/
function canFormWord(inputMap: Map<string, number>, wordMap: Map<string, number>): boolean {
  for (let [char, count] of wordMap) {
      if (!inputMap.has(char) || inputMap.get(char)! < count) {
          return false;
      }
  }
  return true;
}

/**
* Finds all valid English words in a dictionary that can be composed of some or all
* of the characters in an input string, regardless of order.
* @param {string} input - The input string.
* @param {WordDictionary} dictionary - The dictionary of valid English words.
* @returns {string[]} - The list of valid words that can be formed.
*/
function findWords(input: string, dictionary: string[]): string[] {
  let inputMap = createFrequencyMap(input);
  let validWords: string[] = [];

  for (let word of dictionary) {
      let wordMap = createFrequencyMap(word);
      if (canFormWord(inputMap, wordMap)) {
          validWords.push(word);
      }
  }
  return validWords;
}