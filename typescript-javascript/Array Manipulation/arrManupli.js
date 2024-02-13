"use strict";
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("orange");
console.log(`After adding orange at the end of array:
${fruits}`);
fruits.unshift("grapes");
console.log(`After adding grapes at the end of array:
${fruits}`);
fruits.splice(2, 1, "guava");
console.log(`After replacing banana with guava:
${fruits}`);
