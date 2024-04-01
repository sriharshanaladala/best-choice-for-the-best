
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
    let cart_elements = document.getElementsByClassName("cart_items");
    // console.log(cart_elements);
    for  (let i=0;i<cart_elements.length;i++){
    // console.log(typeof(cart_elements[i].childNodes[5].childNodes[1].textContent));
    // console.log(cart_elements[i].childNodes[5].childNodes[0].textContent);
    let  quantity = Number(cart_elements[i].childNodes[5].childNodes[1].textContent)
    // console.log(typeof(quantity));
    localStorage.setItem(`quantity${i}`,parseInt(quantity))
    // localStorage.removeItem(`quantity${i}`);
}
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
        location.href='index.html'
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
// console.log(cart_products[0]);
  let cart_list = document.getElementsByClassName("list_cart")[0]
  console.log(cart_list);
  for(let i=0;i<cart_products[0].length;i++){
    cart_list.innerHTML+=`
    <div class="product_card prod_link cart_items cart_remove">
        <img class="cart_image" src="${cart_products[0][i].image}"  height="200px" width="200px"/>
        <h3 class="cart_name">${cart_products[0][i].name}</h3>
        <h5><button class="add" product_id=${i}>+</button><span class="quant">1</span> <button class="decrease" product_id=${i}>-</button></h5>
        <p class="item_price"><strong>Price:</strong> ${parseFloat(cart_products[0][i].price).toFixed(2)} $ </p>
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
        let cart_elements = document.getElementsByClassName("cart_items");
    console.log(cart_elements);
    localStorage.setItem(`quantity${pid}`,0)
    localStorage.removeItem(`quantity${pid}`);
        location.reload()
})


console.log(cart_products[0]);

})

console.log(cart_products[0][0].price);
total=0
console.log(cart_products[0]);
cart_products[0].forEach(element => {
    console.log(element.price);
    console.log(typeof(element.price))
    total =  total + (Number(element.price));
    localStorage.setItem("total",parseFloat(total).toFixed(2))
    // console.log(element.price);
});
console.log(total);
console.log(typeof(total))

let total_cart_price = document.getElementsByClassName("price")
console.log(total_cart_price);
let total_price = parseFloat(localStorage.getItem("total"));
console.log(typeof(total_price));
total_cart_price[0].textContent = `${total_price}` ;


let add = document.querySelectorAll(".add")
console.log(add);
add.forEach((ele)=>{
    console.log(ele.attributes);
    ele.addEventListener('click',function(e){
        e.preventDefault()
      console.log(`element clicked${ele.attributes["product_id"].value}`);

    //   let product_id = ele.attributes["product_id"].value
    //   let quantity = parseInt(localStorage.getItem(`quantity${product_id}`))

    //   console.log(quantity);
    let product_id = ele.attributes["product_id"].value
    console.log(typeof(product_id));
    let quantity = localStorage.getItem(`quantity${product_id}`);
    console.log(quantity);
        if(!quantity){
            quantity += 1;
        }else {
           quantity = parseInt(quantity)
           }
       quantity++
       localStorage.setItem(`quantity${product_id}`,JSON.stringify(quantity))
    //    window.location.reload()
    let item_quntity = document.getElementsByClassName("quant")
    console.log(item_quntity);
    for(let z=0;z<item_quntity.length;z++){
        item_quntity[z].innerHTML = `${localStorage.getItem(`quantity${z}`)}`
    }
    
    })
    let item_quntity = document.getElementsByClassName("quant")
    console.log(item_quntity);
    for(let z=0;z<item_quntity.length;z++){
        item_quntity[z].innerHTML = `${localStorage.getItem(`quantity${z}`)}`
    }
    let add_qty_price = document.getElementsByClassName("item_price")
    let  total_items = document.getElementsByClassName("quant")
    // console.log(total_items);
    // console.log(add_qty_price);
    let final_price = []
    for(let k=0;k<total_items.length;k++){
        // console.log(add_qty_price[k].textContent.slice(7));
        console.log(total_items[k].textContent);
        console.log(cart_products[0][k].price);
        // console.log(typeof(cart_products[0][k].price));
        if(total_items[k].textContent!=null){
        let item_price = ((Number(cart_products[0][k].price))*Number(total_items[k].textContent)).toFixed(2)
        final_price.push(item_price)
        }
         else{
             let item_price = cart_products[0][k].price
             sum +=item_price
             final_price.push(sum.toFixed(2))
         }
        console.log(final_price);
        console.log( add_qty_price[k].innerText);
        // let item_price = Number(cart_products[0][k].price)
        // console.log(typeof(item_price));
        // console.log(add_qty_price[k].textContent);
        add_qty_price[k].innerText = `Price: $${final_price[k]}`
    }
    // console.log(cart_products[0][0].price);
    let sum =0
    for(let i=0;i<final_price.length;i++) {

        console.log(typeof(Number(final_price[i])));
        sum += Number(final_price[i]);
        
    }
    console.log(sum);
    console.log(typeof(sum));
    localStorage.setItem('total',sum)
    let total_price = parseFloat(localStorage.getItem("total"));
    console.log(total_price);
    let all_price = document.getElementsByClassName("price")[0]
    console.log(all_price);
    all_price.innerHTML = `${total_price.toFixed(2)}`;
    

})





    

// let quant = localStorage.getItem( `quantity${i}`)
// let  itemQuantity = document.querySelectorAll(".quant")
// console.log(itemQuantity[0].innerHTML);
// console.log(typeof(itemQuantity[0].innerHTML));

// for(let h=0;h<itemQuantity.length;h++){
//         itemQuantity[h].innerText = parseInt(localStorage.getItem(`quantity${h+1}`))||0
// }
