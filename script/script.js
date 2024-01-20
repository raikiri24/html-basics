

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

