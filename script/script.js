

//JAVASCRIPT, PYTHON, GDSCIRPT <---- loosely type 

// const  <--- constant

// let <--- value can be changed on the specific scopes

// var <--- value can be changed throughout the code


//x = 2

// C# , JAVA, C++, C <---- strictly type

const items = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : []

let numberOfItems = items.length

const spanNumberOfItems = document.getElementById("numberOfItems")

if (spanNumberOfItems) {
    spanNumberOfItems.innerText = numberOfItems
}


function addItemsToCart({ name, price }) {
    console.log(name)
    const dress = { name, price, index: numberOfItems + 1 }
    items.push(dress)
    localStorage.setItem("item", JSON.stringify(items))
    numberOfItems += 1
    spanNumberOfItems.innerText = numberOfItems

}


function deleteItemFromStorage(id) {
    let items = JSON.parse(localStorage.getItem('item'))
    items = items.filter((item) => {
        console.log(id)
        console.log(item.index != id)
        return item.index != id;
    });

    localStorage.setItem("item", JSON.stringify(items))
    location.reload()
}

const cartNav = document.getElementById("cart-nav")

const itemContainer = document.getElementById("itemContainer")

function getItemFromStorage() {


    console.log((localStorage.getItem('item')))

    const allItems = JSON.parse(localStorage.getItem('item'))

    let itemElements = ""
    allItems.map(({ name, price, index }) => {
        console.log(index)
        itemElements += `<div id='item-${index}'>
        <span>Item Name: ${name}</span>
        <span id="itemName"></span>
        </div>
        <div>
            <span>Price: </span>
            <span id="price"> ${price}</span>
        </div>
        
        <button onClick="deleteItemFromStorage(${index})">Delete</button>
    `
    })
    itemContainer.innerHTML = itemElements

}

const totalElement = document.getElementById("total")


function calculateTotal() {
    let sum = 0
    items.map(({ price }) => {
        return sum += price
    })
    if (totalElement) {
        totalElement.innerText = sum
    }

    return sum
}
if (items) {
    calculateTotal()
}



const dateEl = document.getElementById("date")

if (dateEl) {

    dateEl.innerText = new Date()
}
if (itemContainer) {
    getItemFromStorage()
}


let allOrders = JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : []

function checkout() {

    const order = { total: calculateTotal(), dateOrdered: new Date(), items }
    allItems.push(order) // pushed into the array of orders
    localStorage.setItem("orders", JSON.stringify(allItems))
    localStorage.removeItem('item')
    window.location.href = "/profile.html";

}

const orderContainer = document.getElementById("orderContainer")

if (orderContainer) {

    console.log(allOrders)

    allOrders.forEach((order) => {
        let itemElements = ""
        order['items'].map(({ name, price, index }) => {

            itemElements += `<div id='item-${index}'>
            <span>Item Name: ${name}</span>
            <span id="itemName"></span>
            </div>
            <div>
                <span>Price: </span>
                <span id="price"> ${price}</span>
            </div>
        `
        })


        orderContainer.innerHTML += `
        <div class="flex flex-col gap-2 shadow-2xl " style="margin-top: 20px; padding:20px"> 
        <div>${order['dateOrdered']}</div> 
        <div>${itemElements}</div>
        <div>TOTAL: ${order['total']}</div>
        </div>`
    })

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
