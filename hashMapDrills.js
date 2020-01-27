const HashMap = require('./HashMap');
const _Node = require('./node');

const main = function() {
  const lotr = new HashMap();
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  //The Capacity is 24 because the Hashmap must resize after the 4th index is taken and a 5th value is attempted to be inserted. 8(capacity)*3(size_ratio);
};

main();

//2 - WhatDoesThisDo

//3 - Demonstrate understanding of Hash maps

/*  1- [22, 88, <empty>, 4, 15, 28, 17, 59, 31, 10, <empty>]

    2 - [SEE GIST]
*/

//5 - Any permutation of a palindrome
function palindrome(string) {
  let stringHash = new HashMap();
  let stringArray = [...string];
  stringHash.MAX_LOAD_RATIO = 1;
  stringHash.SIZE_RATIO = 2;
  for (let i = 0; i < stringArray.length; i++) {
    try {
      let val = stringHash.get(stringArray[i]);
      stringHash.set(stringArray[i], val+1);
    }
    catch(err) {
      stringHash.set(stringArray[i], 1);
    }     
  }

  let oddCounter = 0;
  for (let i = 0; i < stringArray.length; i++){
    if(stringHash.get(stringArray[i]) % 2 !== 0) {
      oddCounter = oddCounter + 1;
    }
  }
  
  if (oddCounter > 1) {
    return `${string} cannot be rearranged into a palindrome.`;
  }
  else return `${string} can be rearranged into a palindrome.`;
}

console.log(palindrome('19111199'));

//7 - Separate Chaining -  Algorithm to group a list of words into anagrams.

// index normally
// if duplicate key, start node as value => chain to next value.
function anagramsChain(array) {
  let anagramsHash = new HashMap();
  anagramsHash.MAX_LOAD_RATIO = 1;
  anagramsHash.SIZE_RATIO = 2;

  for (let i = 0; i < array.length; i++){
    let sorted = array[i].split('').sort().join('');
    try {
      anagramsHash.get(sorted);
      if (anagramsHash.get(sorted).data) {
        let testNode = anagramsHash.get(sorted);
        let firstNode = testNode;
        while(testNode.next !== null) {
          testNode = testNode.next;
        }
        testNode.next = new _Node(array[i], null);
      } else {
        let newNode = new _Node(array[i], null);
        let firstNode = new _Node(anagramsHash.get(sorted), newNode);
        anagramsHash.set(sorted, firstNode);
      }
    }
    catch(err) {
      anagramsHash.set(sorted, array[i]);
    }
  }
  let pairs = [[]];
  let j = 0;
  for (let i = 0; i < anagramsHash._hashTable.length; i++) {
    if(anagramsHash._hashTable[i] !== undefined){
      let currentLine = anagramsHash._hashTable[i];
      let k = 0;
      let grouping = [];
      while (currentLine.value !== null){
        grouping[k] = currentLine.value.data;
        currentLine.value = currentLine.value.next;
        k++;
      }
      pairs[j] = grouping;
      j++;
    }
  }
  return pairs;
}

const testArray = [
  'east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'
];

console.log(anagramsChain(testArray));