const contFlex = document.getElementById("cont-flex")

for (i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log("fizzbuzz")
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("fizzbuzz")
        fizzBuzz.innerHTML = "fizzbuzz"

        contFlex.append(fizzBuzz)
        
    }
    else if ((i % 5) == 0) {
        console.log("buzz")
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("buzz")
        fizzBuzz.innerHTML = "buzz"

        contFlex.append(fizzBuzz)
    }
    else if ((i % 3) == 0) {
        console.log("fizz")
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.classList.add("fizz")
        fizzBuzz.innerHTML = "fizz"

        contFlex.append(fizzBuzz)
    }
    else {
        console.log(i)
        const fizzBuzz = document.createElement("div")
        fizzBuzz.append(i)
        fizzBuzz.classList.add("square")
        fizzBuzz.innerHTML = i

        contFlex.append(fizzBuzz)
    }
}