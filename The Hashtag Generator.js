/*
Description:
The marketing team is spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  let arr=str.split(' ').map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join('')
  if (arr.length>139||arr==='') return false
  return '#'+arr
}
