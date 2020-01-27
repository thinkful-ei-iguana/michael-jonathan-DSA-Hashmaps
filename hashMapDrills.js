const HashMap = require('./HashMap');

const main = function() {
  const lotr = new HashMap();
  lotr.set('Hobbit', 'Bilbo');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Hobbit', 'Frodo');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Wizard', 'Gandalf');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Human', 'Aragorn');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Elf', 'Legolas');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Maiar', 'The Necromancer');
  console.log('Capacity: ', lotr._capacity);
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr._hashTable);
  console.log('Should return Hobbit: ', lotr.get('Hobbit'));
  console.log('Should return Sauron: ', lotr.get('Maiar'));
  console.log('Capacity: ', lotr._capacity);
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
    stringHash.set(stringArray[i], stringArray[i]);
  }
  console.log(stringArray.length);
  console.log(stringHash.length);
  console.log(stringHash._hashTable);
  if (stringArray.length === (stringHash.length * 2 - 1)){
    return `${string} can be rearranged into a palindrome.`;
  }
  else {
    return `${string} cannot be rearranged into a palindrome.`;
  }
}

console.log(palindrome('aeiouoiea'));

//7 - Separate Chaining