"use strict"

const ul = document.querySelector("ul.list");

for (let i = 1; i <= 100; i++) {

    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");

    if ((i % 3 == 0) && (i % 5 == 0)) {
        span.append("FizzBuzz");
        div.append(span);
        div.classList.add("square", "red");
        li.append(div);
        ul.append(li);
    } else if (i % 3 == 0) {
        span.append("Fizz");
        div.append(span);
        div.classList.add("square", "green");
        li.append(div);
        ul.append(li);
    } else if (i % 5 == 0) {
        span.append("Buzz");
        div.append(span);
        div.classList.add("square", "yellow");
        li.append(div);
        ul.append(li);
    } else {
        span.append(i);
        div.append(span);
        div.classList.add("square", "blue");
        li.append(div);
        ul.append(li);
    }
}