async function fetchCategories(){
      let response = await fetch("https://fakestoreapi.com/products/categories");
      let data = await response.json();
      return data;
};

let categoryData = fetchCategories();  

categoryData.then((data) => {console.log(data)});