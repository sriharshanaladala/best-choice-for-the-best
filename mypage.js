 let x = fetch("https://fakestoreapi.com/products")
        console.log(x);
        x.then((response)=>{
            console.log(response);
            return response.json()
        }).then((data)=>{
            console.log(data);

            let products = document.getElementById("products")
            // let productHTML = '';
            // let covid_data = document.getElementsByTagName("tbody")[0]
            for  (let i=0; i<data.length ;i++){
                let productcard = document.createElement('div')
                productcard.classList.add('product-card');
                products.innerHTML +=`
                <div class="product_card prod_link">
                <a class="each_product"><span class="id">${data[i].id}</span>
                <img src="${data[i].image}"  height="200px" width="200px"/>
                <h3>${data[i].title}</h3>
                <span>${data[i].rating.rate}</span>
                <p><strong>Price:</strong> ${data[i].price}$</p></a>
                <button id="add_to_cart" product_id=${data[i].id}>add to cart</button>
                </div>
                    `
                    // products.appendChild(product_Card);
            }
            console.log(data);
            // console.log(products);
            let product_Card=document.querySelectorAll('.each_product');
            let product= document.querySelectorAll('.prod_link');
            // console.log(product);
            console.log(product_Card);
      
            product_Card.forEach(function (el) {
                let child = el.childNodes;
                console.log(child);
                el.addEventListener('click', function (e) {
                e.preventDefault()
                    localStorage.setItem('singleproduct', JSON.stringify(data[parseInt(child[0].textContent)-1]))
                   window.location='product.html' + '?pid='+child[0].innerText;
                   localStorage.setItem('product_id', child[0].innerText)
                   
               })
           });
           let y = document.getElementsByClassName
       
           addToCart()
            
               
          function addToCart(){
              
           let  addToCartBtn=document.querySelectorAll('#add_to_cart')
           console.log(addToCartBtn);
           for(let i=0 ; i<addToCartBtn.length;i++){
            addToCartBtn[i].addEventListener( "click", function (e) {
                count.innerText = Number(localStorage.getItem("count")) + 1
                localStorage.setItem("count",Number(localStorage.getItem("count"))+1 )
                alert("Added to Cart you have in the cart");

            })
        }
           count.innerText = localStorage.getItem("count") || 0
        //    let x =localStorage.getItem("productData")
        //    let inventory =JSON.parse(localStorage.getItem("productData"));
        //    console.log(inventory);
        // //    for (let z = 0; z<data.length;z++){
        // //     console.log(data[z].id);
        // //    }
        
           
        //     let invent_id=[]
        //     inventory.forEach((e)=>{
        //         console.log(e.id);
        //         invent_id.push(e)
                
        //     })
        //     console.log(invent_id);
        //     // invent_id.push(JSON.stringify(inventory.id))
        //     localStorage.setItem('invent_id',invent_id)
        // // console.log(localStorage.getItem('invent_id'));
        //   for(let i=0 ; i<addToCartBtn.length ; i++){
        //       addToCartBtn[i].addEventListener("click",()=> {
        //         alert('product added to the cart')
        //         cart_items=[]
        //         let pid = addToCartBtn[i].getAttribute('product_id')
        //         let cnt = document.getElementById('count').value
        //         let obj={"id":pid}

               
        //         let itemIndex = invent_id.indexOf(obj.id);
        //         if(itemIndex==-1){
        //             inventory.push(obj)
        //             invent_id.push(obj.id)
        //             localStorage.setItem("productData", JSON.stringify(inventory));
        //             localStorage.setItem('invent_id',JSON.stringify(invent_id))
        //         }else{
        //             inventory[itemIndex].count += parseInt(cnt,10)
        //         }
        //         localStorage.setItem('cart_items',JSON.stringify(cart_items))
                
                // localStorage.key(localStorage.)
                // product_id.push.localStorage.setItem("product_id",pid) 
                
                    //   count=localStorage.getItem('count');
                    
        }
    }) 
            
// export{
//   addToCart()
// }
