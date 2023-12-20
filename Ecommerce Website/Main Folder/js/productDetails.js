document.addEventListener("DOMContentLoaded",function(e){
      let currentLandingURL = window.location.href;
      

      async function fetchProductDetails(){
            let url = undefined;
            if(currentLandingURL.includes("?")){
                  let queryParams = currentLandingURL.split("?")[1].split("=")[1];
                  url = `https://fakestoreapi.com/products/${queryParams}`;
            }else{
                  url = "https://fakestoreapi.com/products/1";
            }

            let response = await fetch(url);
            let data = await response.json();
            return data;
      }
      
      function populateProductDetailDOM(data){

            // We will first Update the Image:-
            let productImage = document.querySelector(".product-img");

            let image = document.querySelector("img");
            image.alt = "";
            image.src = data.image;

            // We will now update the Right side of the Content

            let productName = document.querySelector(".product-name");
            productName.textContent = data.title;

            let productPrice = document.querySelector(".product-price");
            productPrice.textContent = `$${data.price}`;


            let productDescriptionTitle = document.querySelector(".product-description-title");
            productDescriptionTitle.textContent = "Description";

            let productDescriptionData = document.querySelector(".product-description-data");
            productDescriptionData.textContent = data.description;

      }

      async function populateProductDetails(){
            let data = await fetchProductDetails();
            populateProductDetailDOM(data);
      }

      populateProductDetails();
})