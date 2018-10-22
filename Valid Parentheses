/*
Description:
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens){
  if (parens.length%2!=0) return false;
  let str=parens.slice();
  for(let i=0;i<=str.length;i++){
  str=str.replace(/\(\)/g,'');
  }
  return str.replace(/\(\)/g,'')===''
}
