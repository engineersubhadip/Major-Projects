1. We removed all the hardcoded category List from the Main Content.

2. We implemented a async function `fetchCategories` which will give us a list of Categories from a server (`Fake Store API`).

3. We created another async function `populateCategories` which will consume the promise returned from Step2 and will display it in the UI.