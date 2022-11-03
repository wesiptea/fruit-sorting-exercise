let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruits() {
    for (let i = 0; i < fruit.length; i += 1) {
        // pass the "i" variable to the fruit array to initiate the for loop
        if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        // use else if, rather than just "else" just in case other fruits are added to array - this makes sure only apples move to the appleShelf
        } else if (fruit[i] === "🍎") 
            appleShelf.textContent += "🍎"
        }
    }
sortFruits()