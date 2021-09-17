function addToZero([]){
    if (x + y === 0){
    return addToZero = 'true'
} 
else 
{
    return addToZero = 'false'
}
}
// O(n)
// space O(n)


function hasUniqChar(str) {
    let uniqChar = ""
    for (let i = 0; i < str.length, i++)
    {
    if (uniqChar.includes(str[i]) === true){
        return hasUniqueChar = 'true';
    }
else 
{
return hasUniqChar = 'false';
}
}
// O(n)
// space O(n)

const alphabet26 = 'abcdefghijklmnopqrstuvwxyz';
let input = str();
input = input.toLowerCase();
let icnt = 0;

for (let i = 0; i < alphabet26.length; i++) {
  var letter = alphabet26[i];
  if (input.indexOf(letter) > -1)
    icnt++;
}

if (icnt == 26)
  return 'true';
else
  return 'false';
//   O(n)
// space O(n)


  function find_longest_word(string) {
      let str = string.split(" ");
      var longest = 0;
      var word = null;
      for (var i = 0; i <= str.length - 1; i++) {
          if (longest < str[i].length) {
              longest = str[i].length;
              longestword = str[i];
          }
      };
      return longestword;
  }
console.log(find_longest_word('hi', 'hello'));

// O(1)
// space O(1)
