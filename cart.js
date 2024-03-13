
let count = document.getElementById('count')
count.innerText = localStorage.getItem("count")
let closecart = document.getElementsByClassName("close")[0]
let check_out = document.getElementsByClassName("check_out")[0]
let clearcart = document.getElementsByClassName('clear')[0]

clearcart.addEventListener('click',(e)=>{
    e.preventDefault();
    count.innerText = 0
    localStorage.setItem("count",0)
    localStorage.removeItem("products")
    window.location.reload('cart.html');
})
closecart.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location='index.html'
})
check_out.addEventListener('click',(e)=>{
    e.preventDefault()
    if (localStorage.getItem("count")==0){
        alert( "Please add some items to your cart before checking out.")
    }else{
    alert("order succesfull")
    localStorage.removeItem("count")
      location.href='index.html';
    }
})

let cart_products=[]
let cart_item = localStorage.getItem("products")
// console.log(cart_item[0]);
cart_products.push(JSON.parse(cart_item)) 
console.log(cart_products[0]);
  let cart_list = document.getElementsByClassName("list_cart")[0]
  console.log(cart_list);
  for(let i=0;i<cart_products[0].length;i++){
    cart_list.innerHTML+=`
    <div class="product_card prod_link cart_items cart_remove">
        <img class="cart_image" src="${cart_products[0][i].image}"  height="200px" width="200px"/>
        <h3 class="cart_name">${cart_products[0][i].name}</h3>
        <p><strong>Price:</strong> ${cart_products[0][i].price}$</p></a>
        <button class="remove_from" product_id=${i}>remove</button>
        </div>
    `
}
// console.log(cart_products[0][2].pid);
let remove = document.querySelectorAll(".remove_from")
console.log(remove);
remove.forEach(function (e){
    console.log(e.attributes[1].nodeValue);
    // let cid = e.attributes[1].nodeValue
    e.addEventListener("click",(event)=>{
        // e.preventDefault()
        event.stopPropagation();
    // e.parentElement.remove()

        let pid = parseInt(event.target.attributes["product_id"].value)
        console.log(typeof(pid));
        cart_products[0].splice(pid,1)
        console.log(cart_products[0]);
        let count=localStorage.getItem('count')
        count--
        localStorage.setItem('count',count)
        localStorage.setItem("products", JSON.stringify(cart_products[0]))
        location.reload()
})


console.log(cart_products[0]);

})
let cart_item1 = document.getElementsByClassName("price")
console.log(cart_item1);
localStorage.setItem("total",JSON.stringify(cart_item1));
for(let j=0;j<cart_item1.length;j++) {
    // let price = parseFloat(cart_item1[j].innerText.slice(1))
    // let total = JSON.parse(localStorage.getItem("total"))
    // if(!total) {
    //     total=[];
    // }  
    // total.push(price) 
    // localStorage.setItem("total",JSON.stringify(total))     
}


