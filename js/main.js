"use strict"

const ul = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++) {

    const li = document.createElement("li");
    
    if ((i % 3 == 0) && (i % 5 == 0)) {
        li.append("FizzBuzz");
        ul.append(li);
    } else if (i % 3 == 0) {
        li.append("Fizz");
        ul.append(li);
    } else if (i % 5 == 0) {
        li.append("Buzz");
        ul.append(li);
    } else {
        li.append(i);
        ul.append(li);
    }
}