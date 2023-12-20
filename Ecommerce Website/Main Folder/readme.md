`Home Page - Index Page`

1. We removed all the hardcoded category List from the Main Content.

2. We implemented a async function `fetchCategories` which will give us a list of Categories from a server (`Fake Store API`).

3. We created another async function `populateCategories` which will consume the promise returned from Step2 and will display it in the UI.

`All Products Page`

4. First of all we have implemented the whole functionality inside the `DOMContentLoaded` Event Listener. What it will do is that whenever our HTML content is done loading the JS File can start executing it will not have to wait for the Images or other items to load.

5. We have used an async function `fetchProducts` to download all the products from the Fake Store API.

6. We have used async function `populateProducts` to consume the data returned from the Step5. We iterated in the returned List of Products and populated the DOM.

7. Now we will repair the styling to the Products Page. As of now, the product image cards looks uneven. We will have to fix that.

8. We will call the async function `populateProducts` to populate our DOM. We have implemented this because whenever the user will land in the Product Details Page. We will be seeing all the products.

8A. Also I have implemented a function `populateDOM` which will take an array as an argument. What this function will do is, the code inside this function was being used everywhere. So in order to avoid redundancy, I have made this as a function. The function will populate the DOM based on the Products we feed as an input.

9. Now we have implemented the Filter functionality. We have added an Event Listener on the `Search Filter` button. Whenever the user is setting a Min Price and Max Price and clicking on Search Filter. We are firstly capturing the value of the Min and Max Price. Once, we have that we are calling the function `fetchProducts`. Since this function returns us a promise based Object but we have to access the value, so we use a async function as a callback inside the event Event Listener applied on the Search Button. Once we have all the records we have implemented a `filter` HOF to filter out the results based on the Min and Max Price. Also since we are supposed to clear out all the default display products and replace them with the updated ones, I have `productListBox.innerHTML = ""`. By doing so all the default displayed products clear out. Now we call `populateDOM` and pass the filtered array as an input to display the filtered data.

10. We have implemented the Clear Filter Functionality. We have added Event Listener on the `Clear Filter` Button. Whenever the user is clicking on this button whatever was the filtered results displayed, that gets cleared and the default view gets applied. After we have clicked on the Clear Filter then, inside the event listener we have first re-setted the max and min value to 0.
After that we have cleared the DOM. Then we called the function `populateProducts`. This function will render the DOM with all the products.

11. In the `index.js` file , whatever categories we have created for all the categories whenever we will now click on them we will be redirected to the `product list`. Also, if we click on any of the category we will now able to see `query params ` for that category. For every category we have created in JS, for each of them in the anchor section we have updated the `query params`.

The reason why we did this is that, now that we have `query params` for each category we click. We can use that query Params to filter out the data we need in the Product List Page.

12. Now that we have implemented query params on the home page.
In the `productList.js` file we are first catching the URL of the product list page using `window.location.search`. Then using `split` we are able to get the category user clicked in the first place from the Home Page. Once we have that, using the fakestore API to get list of all the products in a particular category `https://fakestoreapi.com/products/category/jewelery` we have changed the last category name and used that as an input to for `fetch`.

13. Fixed a bug in the `Product List` page. The bug was when we were going to the `Product List` page from the `Home Page` by clicking on any of the categories in the `Home Page` then we were able to get the proper cards in the Product List. But if we were just going to the `Product List` page without clicking in any of the categories tab, then we were not showing anything. So what we did was we fixed the query params and now upon landing in the `Product List` page either from Home or direct we are able to get the proper listings.

14. We have implemented a feature where user can now be able to look at all the products by clicking on any of the categories in the Product List Page. Firstly, we have dynamically populated the Categories in the Product List Page via the API to list all the relevant categories available for us. Then on each of the categories inside the anchor tag we ha ve manipulated the query params in such a way that when the user clicks on any of the categories the URL gets changed. Then `populateProducts` gets called and this calls `fetchProducts` and `fetchProducts` using string manipulation technique on the URL returns updated products.


15. Now we have implemented that for every product listed (filtered or otherwise) we can click on any of the product and be able to see the Details about that product inside the Product Details Page.
What we implemented is that inside `populateDOM()` where we are creating all the cards for the products, inside the link tag we are using templated string format and using query params to redirect the user to Product Details Page and after that using query Params we are sending in the ID. `eg (productDetails.html?category=${array[i].id})`. Once that is done, it basically means by clicking on any of the cards we can now be able to land in the Product Detail Page. But for every card we click we shall be getting a different ID for the category. Once that is done, inside the `productDetails.html` page, we are first extracting the parent URL. From there using string formatting we are finding out what is the category Number. Once we have this we are sending the category Number inside the templated String of `https://fakestoreapi.com/products/1`. Here we are dynamically changing `1`. Then using `fetchProductDetails()` we are fetching the response, converting it into JSON, then returning the value. Inside `populateProductDetails()` we are consuming the Promise, `fetchProductDetails()`. We are using `populateProductDetailDOM()` inside `fetchProductDetails()` to populate the DOM. `Also we are just re-rendering the part which is subject to change and not the whole page itself`.