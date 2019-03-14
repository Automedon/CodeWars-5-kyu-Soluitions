/*
Description:
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/
var Vector = function (components) {
  this.x = components;
};
Vector.prototype.add = function(b){
  var a = this.x
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return new Vector(a.map(function(x,i){ return x + b[i]; }));
}
Vector.prototype.subtract = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return new Vector(a.map(function(x,i){ return x - b[i]; }));
}
Vector.prototype.dot = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) throw new TypeError("Vectors have different length");
  return a.reduce(function(s,x,i){ return s + x * b[i]; },0);
}
Vector.prototype.equals = function(b){
  var a = this.x;
  b = b.x;
  if(a.length !== b.length) return false;
  return a.every(function(x,i){ return x === b[i]; });
}
Vector.prototype.norm = function(){
  var a = this.x;
  return Math.sqrt(a.reduce(function(s,x){ return s + x*x }, 0));
}
Vector.prototype.toString = function(){
  return '(' + this.x.join(',') + ')';
}
