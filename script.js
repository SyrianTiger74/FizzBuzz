// FIZZ BUZZ

// function fizzbuzz() {
//   for (let i = 1; i <= 300; i++) {
//     if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
//       console.log(`FizzBuzzBiff`)
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`Fizz`)
//     } else if (i % 7 === 0 && i % 3 === 0) {
//       console.log(`FizzBiff`)
//     } else if (i % 7 === 0 && i % 5 === 0) {
//       console.log(`BuzzBiff`)
//     } else if (i % 3 === 0) {
//       console.log(`Buzz`)
//     } else if (i % 5 === 0) {
//       console.log(`FizzBuzz`)
//     } else if (i % 7 === 0) {
//       console.log(`Biff`)
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzbuzz()


function fizzbuzz() {
    for (let i = 1; i <= 300; i++) {
      let output = ""
    
      if (i % 3 === 0) {
          output += "Fizz"
      }
      
      if (i % 5 === 0) {
          output += "Buzz"
      }
      
      if (i % 7 === 0) {
          output += "Biff"
      }
    
      if (i % 9 === 0) {
          output += "Fuzz"
      }
    
      if (i % 11 === 0) {
          output += "Bizz"
      }
    
      if (output === "") {
          output = i
      }
    
      console.log(output)
    }
    }
    
    fizzbuzz()