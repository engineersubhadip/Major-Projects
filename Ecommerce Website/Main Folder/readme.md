`Home Page - Index Page`

1. We removed all the hardcoded category List from the Main Content.

2. We implemented a async function `fetchCategories` which will give us a list of Categories from a server (`Fake Store API`).

3. We created another async function `populateCategories` which will consume the promise returned from Step2 and will display it in the UI.

`All Products Page`

4. First of all we have implemented the whole functionality inside the `DOMContentLoaded` Event Listener. What it will do is that whenever our HTML content is done loading the JS File can start executing it will not have to wait for the Images or other items to load.

5. We have used an async function `fetchProducts` to download all the products from the Fake Store API.

6. We have used async function `populateProducts` to consume the data returned from the Step5. We iterated in the returned List of Products and populated the DOM.

7. Now we will repair the styling to the Products Page. As of now, the product image cards looks uneven. We will have to fix that.

