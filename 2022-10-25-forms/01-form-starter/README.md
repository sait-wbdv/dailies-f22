# JS Activity: Form fields and DOM output
The following files contain code that runs when a function is invoked. Refactor each of these files so that:
- the initial argument values are submitted by the user using form fields;
- the response is printed to `index.html`.

## Instructions
For each of the `.js` files in this Gist:
1. Create a new HTML file named after the respective `.js` file. For example, `captialize.html` should link to `capitalize.js` in a `<script>` element in the `<head>`;
2. In this HTML file, 
    - add an appropriate form field and `<label>` for each of the values the user will be submitting. Examples:
        - for a `Number`:
            ```html
            <label for="sub-total">Sub-Total: </label>
            <input type="number" name="gst" id="sub-total">
            ```
        - for a `String`:
            ```html
            <label for="sub-total">Full Name:</label>
            <input type="text" name="full-name" id="full-name">
            ```
    - Add a `<button type="submit">` element to submit the data, if it's not already present.
    - Add a `<p>` element to store the response, if it's not already present.
3. In the `.js` file:
    1. Assign form and paragraph to its own variable using [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector):
        
        ```js
        const form = document.querySelector('form');
        const output = document.querySelector('.output')
        ```

    2. Assign supplied function to a `submit` event on the `<form>` using [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener):

        ```js
        form.addEventListener('submit', clickHandler);
        ```
        - `clickHandler` can be renamed to the provided function name;
    
    3. Inside the `clickHandler`, assign form field data to the appropriate variable using `form.FormElementId.value`. 

        ```js
        const subtTotal = form.subtotal.value;
        ```
    4. Instead of using `console.log`, use [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) to send the `clickHandler` response to a `<p>` element (for example) on the `.html` page.
        
        ```js
        output.textContent = `some response with ${calculation}`
        ```

## Bonus Activity
Both the Tip Calculator and the GST Calculator deal with rates and percentages. 
1. Write a utility function that will convert a rate (i.e. `0.05`) into a percentage (`5%` as a string).
    - **Note**: you will need to use [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword to pass the new percentage string back to the calling script.
2. Refactor the Tip and GST Calculators to use your function and include the GST/Tip percentage in its response.