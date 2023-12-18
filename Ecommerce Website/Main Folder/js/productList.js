document.addEventListener("DOMContentLoaded",function(e){

      async function fetchProducts(){
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            return data;
      }
      
      async function populateProducts(){
            let productsList = await fetchProducts();
            let productListBox = document.querySelector("#product-list");
      
            for (let i=0; i<productsList.length; i++){
      
                  let productLink = document.createElement("a");
                  productLink.href = "productDetails.html"; // As of now we will be able to redirect the same product detail.
                  productLink.target="_blank";
                  productLink.classList.add("product-item", "d-inline-block", "text-decoration-none");
            
                  let productImageHolder = document.createElement("div");
                  productImageHolder.classList.add("product-img");
            
                  let productImage = document.createElement("img");
                  productImage.src = productsList[i].image; // Loaded the Product Image
      
                  productImageHolder.appendChild(productImage);
      
                  productLink.appendChild(productImageHolder);
      
                  let productName = document.createElement("div");
                  productName.classList.add("product-name","text-center");
      
                  productName.textContent = productsList[i].title.substring(0,12)+"..."; // Populating the Title of the Product.
      
                  productLink.appendChild(productName);
      
                  let productPrice = document.createElement("div");
                  productPrice.classList.add("product-price","text-center");
      
                  productPrice.textContent = `\u20B9 ${productsList[i].price}`; // Populating the Price of the Product
      
                  productLink.appendChild(productPrice);
      
                  productListBox.appendChild(productLink); //Appending the newly created product to the Product List Box
            };
      
      };
      
      populateProducts();
})

