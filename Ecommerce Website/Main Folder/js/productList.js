document.addEventListener("DOMContentLoaded",function(e){

      async function fetchProducts(){
            let parentURL = window.location.search;
            let url = undefined;

            if (parentURL.includes("?")){
                  let queryParams = parentURL.split("?")[1].split("=")[1];
                  url = `https://fakestoreapi.com/products/category/${queryParams}`
            }else{
                  url = "https://fakestoreapi.com/products"
            }

            let response = await fetch(url);
            let data = await response.json();
            return data;
      }

      async function fetchCategories(){ // We will be using this function to dynamically populate the Categories in the Left Panel of the Product List Page.
            let response = await fetch("https://fakestoreapi.com/products/categories");
            let data = await response.json();
            return data;
      };

      function populateDOM(array){ // This function is used to populate the DOM
            let productListBox = document.querySelector("#product-list");
      
            for (let i=0; i<array.length; i++){
                  let productLink = document.createElement("a");
                  productLink.href = `productDetails.html?category=${array[i].id}`; //Whenever we will click on this page we will be redirected to product details page and using the query params we are giving. In the target page of productDetails we shall be utilizing this query params to fetch the records of the specific product.
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
      
                  productPrice.textContent = `$${array[i].price}`; // Populating the Price of the Product
      
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

      let clearFilterBtn = document.querySelector("#clear");

      clearFilterBtn.addEventListener("click",function(e){

            minPrice.value = 0;
            maxPrice.value = 0;

            let productListBox = document.querySelector("#product-list");
            productListBox.innerHTML = ""; // We are clearing out the current List 

            populateProducts(); // This will populate the DOM with all the products.
      });

      // We are now going to dynamically populate the Category Listings in the Left Side Panel:-
      function populateCategoryDOM(categoryArray){
            let categoryList = document.querySelector("#categoryList");
            for (let i=0; i<categoryArray.length; i++){
                  let categoryLink = document.createElement("a");
                  categoryLink.classList.add("d-flex", "text-decoration-none");
                  categoryLink.textContent = categoryArray[i];
                  categoryLink.href = `productList.html?category=${categoryArray[i]}`;

                  categoryList.appendChild(categoryLink);
            };
      };

      async function populateCategories(){
            let categoryArray = await fetchCategories();
            populateCategoryDOM(categoryArray);
      };

      populateCategories();

});

