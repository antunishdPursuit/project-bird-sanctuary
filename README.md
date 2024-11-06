# Bird Sanctuary Adoption App

This **Bird Sanctuary Adoption App** is a user-friendly one page application built with **React, Bootstrap, HTML, and CSS**. The app offers a way for users to browse and adopt birds, updating the shopping cart and applying discounts based on the cart contents. 

## Features

1. **Bird Collection**: Users can browse a variety of adoptable birds, each displayed with a name, image, and adoption price.
   
2. **Dynamic Cart Management**:
   - Users can add birds to the cart, and the total cost updates in real time.
   - If three or more birds are added to the cart, a **10% discount** is applied automatically.
   - Users can remove birds from the cart, with real-time updates on the displayed list and total cost.

3. **Bonus Items**: Based on the cart total, users receive bonus items. Bonus tiers range from 1 to 4 items, depending on the purchase amount, adding an element of fun and reward to the adoption process.

4. **Checkout Form**:
   - A checkout form allows users to finalize their adoption.
   - On successful submission, the cart resets, and a confirmation alert notifies the user.

5. **Adoption Confirmation Modal**:
   - After adding birds to the cart, a modal appears to confirm the adoption process.
   - Upon closing, it redirects users to an external bird adoption website for further information.

## Project Structure and Data Management

- **Data Storage**: Bird data and bonus items are stored in separate JavaScript files (`birds.js` and `bonusItems.js`), ensuring a clear separation between data and application logic.
- **State Management with React**: React state is used extensively for managing cart items, discounts, and dynamic data updates.
- **Responsive Styling with Bootstrap**: Bootstrap is integrated for a responsive, visually appealing layout, providing a seamless experience on both desktop.

## Technologies Used

- **React**: For building a responsive and interactive user interface.
- **Bootstrap**: For consistent and responsive styling.
- **JavaScript (ES6+)**: Used throughout the project for logic and data handling.
- **CSS**: For custom styling and animations.

## How to Use

1. **Browse** the birds available for adoption.
2. **Add Birds** to the cart, where the total cost and potential discounts will be calculated.
3. **Earn Bonus Items** as the cart total increases, making each adoption more rewarding.
4. **Complete Checkout** to adopt the birds. A modal will confirm the adoption, and the cart will reset after submission.

## Compatibility

- **Supported Browser**: Works on Chrome. Currently not supported on other browsers.

## Live Demo

Try the app here: [SkyHaven Sanctuary](https://skyhavensanctuary.netlify.app/)


