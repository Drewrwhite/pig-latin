let vowelsArray = ["a", "i", "o", "u", "e"];

function firstCharVowel(input) {
  let array = input.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (vowelsArray.includes(array[i][0].toLowerCase())) {
      array[i] = array[i] + "way";

    }

  }
  return array;
}
