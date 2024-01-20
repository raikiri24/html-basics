

//JAVASCRIPT, PYTHON, GDSCIRPT <---- loosely type 

// const  <--- constant

// let <--- value can be changed on the specific scopes

// var <--- value can be changed throughout the code


//x = 2

// C# , JAVA, C++, C <---- strictly type


let numberOfItems = 0

const spanNumberOfItems = document.getElementById("numberOfItems")


function addItemsToCart() {
    numberOfItems += 1
    console.log(numberOfItems)
    spanNumberOfItems.innerText = numberOfItems

}

function checkItemsInCart(value) {
    console.log(value)
}

let totalAmount = 0

const firstItem = document.getElementById("firstItem")
const secondItem = document.getElementById("secondItem")
const thirdItem = document.getElementById("thirdItem")
const total = document.getElementById("total")

firstItem.addEventListener("change", () => {
    firstItem.checked ? totalAmount += parseInt(firstItem.value) : totalAmount -= parseInt(firstItem.value)

    total.innerText = totalAmount
})

secondItem.addEventListener("change", () => {

    if (secondItem.checked) {
        totalAmount += parseInt(secondItem.value)
    }
    else {
        totalAmount -= parseInt(secondItem.value)
    }
    total.innerText = totalAmount
})

thirdItem.addEventListener("change", () => {
    if (thirdItem.checked) {
        totalAmount += parseInt(thirdItem.value)
    }
    else {
        totalAmount -= parseInt(thirdItem.value)
    }
    total.innerText = totalAmount
})