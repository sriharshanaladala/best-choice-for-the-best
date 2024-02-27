
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
    window.location='mypage.html'
})
check_out.addEventListener('click',(e)=>{
    e.preventDefault()
    if (localStorage.getItem("count")==0){
        alert( "Please add some items to your cart before checking out.")
    }else{
    alert("order succesfull")
    localStorage.removeItem("count")
      location.href='mypage.html';
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
        // console.log(event.indexOf(cid.nodeValue));
    //     let cid = e.attributes[1]
    //     console.log(cid);
    // //    cart_products[0].splice(cid,1)
    //     console.log(cart_products[0].length);
    //     for(let j=0;j<cart_products[0].length;j++)
    //     if(cid[j].nodeValue === cart_products[0][j].pid){
    //         console.log("equal");
    //     }
    // 
    // let remove_element = document.getElementsByClassName("cart_remove")
    // console.log(remove_element);
    // let pid = parseInt(e.attributes["product_id"].value)
    // console.log(pid);
    // for(var i=0;i<remove_element.length;i++ ){
    //   if(remove_element[i].childNodes[1].innerText == e.parentElement.childNodes[1].innerText){
    //       remove_element[i].remove()
    //   }
    // }
    // let count = localStorage.getItem('count')
    // count = JSON.parse(count)
    // count-=1
    // localStorage.setItem('count',JSON.stringify(count))
    // location.reload();
    // console.log(e.getAttribute("product_id"));
    // let cart_index = e.getAttribute("product_id");
    
    
// let cart_items = document.getElementsByClassName("cart_items");   
// console.log(cart_items); 
// let cartarr = cart_items[0];
// console.log(cartarr);
// for(let i=0;i<cart_products.length;i++){
//     console.log(cart_products[i]);
//     cart_products.splice(cart_index,1)
//     console.log(cart_products[0]);
//     }
})

// let  cart_index =document.getElementById("addToCartBtn");
// addtoCartBtn.getAttribute("product_id")
// console.log(cart_index);
console.log(cart_products[0]);

})
