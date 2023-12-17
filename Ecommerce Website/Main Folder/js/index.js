async function fetchCategories(){
      let response = await fetch("https://fakestoreapi.com/products/categories");
      let data = await response.json();
      return data;
};

// Using fetchCategories() I am fetching the data
// Using populateCategories() I am displaying all the categories in the UI.

async function populateCategories(){
      let categories = await fetchCategories();
      let categoryListDiv = document.querySelector("#category-list");

      for (let i=0; i<categories.length; i++){

            let currentCategoryHolder = document.createElement("div");
            currentCategoryHolder.classList.add("category-item","d-flex","flex-column","justify-content-center");

            let currentCategoryLink = document.createElement("a");

            currentCategoryLink.textContent = categories[i]; // Here we are setting the incoming category Name inside the Anchor Tag

            currentCategoryLink.href = "#";

            currentCategoryHolder.appendChild(currentCategoryLink);

            categoryListDiv.appendChild(currentCategoryHolder);
      }
}

populateCategories();