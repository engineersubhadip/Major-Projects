document.addEventListener("DOMContentLoaded",function(e){
      let currentLandingURL = window.location.href;
      console.log(currentLandingURL);

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
            productImage.innerHTML = "";

            let image = document.createElement("img");
            image.alt = "";
            image.src = data.image;
            productImage.appendChild(image);

            // We will now update the Right Side;

            let productDetails = document.querySelector("#productDetails");
            productDetails.innerHTML = "";

            let productName = document.createElement("div");
            productName.classList.add("product-name");
            productName.textContent = data.title;

            let productPrice = document.createElement("div");
            productPrice.classList.add("product-price","fw-bold");
            productPrice.textContent = `$${data.price}`;

            let productDescription = document.createElement("div");
            productDescription.classList.add("product-description");

            let productDescriptionTitle = document.createElement("div");
            productDescriptionTitle.classList.add("product-description-title", "fw-bold");
            productDescriptionTitle.textContent = "Description";

            productDescription.appendChild(productDescriptionTitle);

            let productDescriptionData = document.createElement("div");
            productDescriptionData.classList.add("product-description-data");
            productDescriptionData.textContent = data.description;

            productDescription.appendChild(productDescriptionData);

            productDetails.appendChild(productName);

            productDetails.appendChild(productPrice);

            productDetails.appendChild(productDescription);

      }

      async function populateProductDetails(){
            let data = await fetchProductDetails();
            populateProductDetailDOM(data);
      }

      populateProductDetails();
})