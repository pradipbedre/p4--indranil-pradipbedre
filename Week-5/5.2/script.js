let isVowel = (char) => {
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return true;
  }
  return false;
};

const vowelCount = (str) => {
  const mp = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);
  for (let character of str) {
    if (isVowel(character)) {
      mp.set(character, mp.get(character) + 1);
    }
  }
  return mp;
};

let receivedMap = vowelCount("pradiiip");
receivedMap.forEach((value,key) => {
  console.log(`${value} <= ${key}`);
});
