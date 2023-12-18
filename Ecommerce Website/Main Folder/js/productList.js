document.addEventListener("DOMContentLoaded",function(e){

      async function fetchProducts(){
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            return data;
      }

      function populateDOM(array){ // This function is used to populate the DOM
      
            let productListBox = document.querySelector("#product-list");
      
            for (let i=0; i<array.length; i++){
      
                  let productLink = document.createElement("a");
                  productLink.href = "productDetails.html"; // As of now we will be able to redirect the same product detail.
                  productLink.target="_blank";
                  productLink.classList.add("product-item", "d-inline-block", "text-decoration-none");
            
                  let productImageHolder = document.createElement("div");
                  productImageHolder.classList.add("product-img");
            
                  let productImage = document.createElement("img");
                  productImage.src = array[i].image; // Loaded the Product Image
      
                  productImageHolder.appendChild(productImage);
      
                  productLink.appendChild(productImageHolder);
      
                  let productName = document.createElement("div");
                  productName.classList.add("product-name","text-center");
      
                  productName.textContent = array[i].title.substring(0,12)+"..."; // Populating the Title of the Product.
      
                  productLink.appendChild(productName);
      
                  let productPrice = document.createElement("div");
                  productPrice.classList.add("product-price","text-center");
      
                  productPrice.textContent = `\u20B9 ${array[i].price}`; // Populating the Price of the Product
      
                  productLink.appendChild(productPrice);
      
                  productListBox.appendChild(productLink); //Appending the newly created product to the Product List Box
            };
      }
      
      async function populateProducts(){
            let productsList = await fetchProducts();
            populateDOM(productsList)
      
      };
      
      populateProducts();

      let minPrice = document.querySelector("#minPrice");

      let maxPrice = document.querySelector("#maxPrice");

      let searchBtn = document.querySelector("#search");

      searchBtn.addEventListener("click",async function(e){
            let minBoundary = minPrice.value;
            let maxBoundary = maxPrice.value;
            let productList = await fetchProducts();

            let productListBox = document.querySelector("#product-list"); // This is the parent under which all the filtered records will come

            productListBox.innerHTML = ""; // Every time we use new filter parameters, we will remove the old products from the DOM and populate the DOM with newly filtered array.

            let filteredProducts = productList.filter(function(value){
                  if (value.price >= minBoundary && value.price <= maxBoundary){
                        return true;
                  }else{
                        return false;
                  }
            });

            // Now that we have our Filtered Products we can call populateDOM and pass in the filtered array to populate our DOM
            
            populateDOM(filteredProducts);
      });

});

