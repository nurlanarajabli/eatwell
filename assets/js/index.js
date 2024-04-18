const shop = document.querySelector("#productCard")
const count = document.querySelector(".shopping")
let db
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then(res => {
        db = res.data.products;
        db.forEach((item) => {
            let box = document.createElement('div');
            box.className = "productCard";
            box.innerHTML = ` <img
        src = "${item.thumbnail}"
        alt="product"
      <div class="cardBox">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="cardBtn" onclick="addToCard(${item.id})">Sebte ekle</button>
      </div>
      `
            shop.appendChild(box);
        })
    })
}
// getAllProducts()
function addToCard(id) {

    let shop = JSON.parse(localStorage.getItem('card')) || []
    card.push(db.find(item => item.id == id))
    localStorage.setItem('card', JSON.stringify(card))
}
window.onload = () => {
    getAllProducts()
}
function add() {
    let card = JSON.parse(localStorage.getItem('card'))
    if (card.length != 0) {
        count.innerHTML = card.length
    } else {
        count.style.display = 'none'
    }

}
add()



