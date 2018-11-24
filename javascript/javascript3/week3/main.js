function createProduct(name,quantity,price) {
  return {
    name: name,
    changeName:function(newName){
      this.name=newName
    },
    quantity: quantity,
    price: price,
  }
}

function createShoppingCart(products) {
  return {
    addProduct: function(product) {
      // Implement functionality here
      products.push(product)
    },
    getProducts: function(){
      return products;
    },
    removeProduct: function() {
      // Implement functionality here
      const index = products.indexOf(product);
      products.splice(index,1);

    },
    getTotal: function() {
      // Implement functionality here
      let totalPrice = 0;
      products.forEach((product)=>{
        totalPrice+=product.price*product.quantity;

      });
      return "The total price is: "+totalPrice+"kr";

    },
    renderProducts: function() {
      const myProductName = document.getElementById("pname").value;
      const myProductQty = Number(document.getElementById("pqty").value);
      const myProductPrice = Number(document.getElementById("price").value);
      if(myProductName==""||myProductQty==""||myProductPrice==""){
        alert("Fill all the form");
      }
      else{
        inames.push(myProductName);
        iquantity.push(myProductQty);
        iprice.push(myProductPrice);
        displayCart();
      }
    },
    getUser: function() {
      // Implement functionality here
      return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(resp=>resp.json())
      .then((user)=>{console.log(user);})
    }
  }
}
const inames=[];
const iquantity=[];
const iprice=[];
function displayCart(){
  let cartData="<table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>";
  let total=0;
  for(let i=0;i<inames.length;i++){
    total+=iquantity[i] * iprice[i];
    cartData+= "<tr><td>" + inames[i] + "</td><td>" +
    iquantity[i] + "</td><td>" + iprice[i] +
    "</td><td>" + iquantity[i]*iprice[i] +
    "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>";
  }
  cartData+= "<tr><td></td><td></td><td></td><td>" + total +
  "</td></tr>";
  document.getElementById("cart").innerHTML= cartData;
}
function delElement(a){
  inames.splice(a,1);
  iquantity.splice(a,1);
  iprice.splice(a,1);
  displayCart();
}

const flatscreen = createProduct('Flat-screen', 5000,1);
const fridge = createProduct("Fridge",7000,1);
const computer = createProduct("Computer",4000,1);
const pasta = createProduct("pasta",50,3);
const phone = createProduct("phone",3000,1);

const shoppingCart = createShoppingCart([]);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(fridge);
shoppingCart.addProduct(pasta);
shoppingCart.addProduct(phone);
shoppingCart.addProduct(computer);
console.log(shoppingCart.getProducts());
