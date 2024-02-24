let count = document.getElementById('count')
count.innerText = localStorage.getItem("count")
   let oneproduct=[]
let product = localStorage.getItem('singleproduct'.valueOf('id'));
console.log(product);
oneproduct.push(product)
JSON.parse(oneproduct[0])
let prod = JSON.parse(oneproduct[0])
console.log(prod.rating);
document.querySelector(".single_product").innerHTML += `
        <div id=product class="product_card prod_link prod">
        <span>${prod.id}</span>
        <h1>${prod.title}</h1>
        <img src="${prod.image}"  height="200px" width="200px"/>
        <p class="disc">${prod.description}</p><br>
        <p class="rat">rating: ${prod.rating.rate}</p>
        <p class="stk">reviews: ${prod.rating.count}</p><br>
        <p class="price"><strong>Price: </strong> ${prod.price}$</p><br>
        <button id="add_to_cart" product_id=${prod.id}>add to cart</button>
        </div>
        `



        let  addToCartBtn=document.querySelectorAll('#add_to_cart')
        for (var i=0;i<addToCartBtn.length;i++){
            addToCartBtn[i].addEventListener('click',function(){
                alert('Product added to the Cart!');
                count.innerText = Number(localStorage.getItem("count")) + 1
                localStorage.setItem("count",Number(localStorage.getItem("count"))+1 )
                // console.log(`You clicked on button number ${i}`) 
                let item={
                        "image":prod.image,
                    "name":prod.title,
                    "quantity":1,
                    "price":parseInt(prod.price),
                    "pid":this.getAttribute('product_id'),
                }
              
              if(!localStorage.getItem('products')){
                  let products = [];
                  products.push(item);
                  localStorage.setItem("products", JSON.stringify(products));
              }else {
                  let products = JSON.parse(localStorage.getItem('products'));
                  if (!products.some((x)=>(x.pid == item.pid))) {
                      products.push(item);  
                      localStorage.setItem("products", JSON.stringify(products))      
                  }
              }                        
          })
     }


     