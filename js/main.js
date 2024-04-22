const contFlex = document.getElementById("cont-flex")

for (i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("fizzbuzz")
        fizzBuzz.innerHTML = "fizzbuzz"

        contFlex.append(fizzBuzz)
        
    }
    else if ((i % 5) == 0) {
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("buzz")
        fizzBuzz.innerHTML = "buzz"

        contFlex.append(fizzBuzz)
    }
    else if ((i % 3) == 0) {
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("fizz")
        fizzBuzz.innerHTML = "fizz"

        contFlex.append(fizzBuzz)
    }
    else {
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.innerHTML = i

        contFlex.append(fizzBuzz)
    }
}