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


## How to Use

1. **Browse** the birds available for adoption.
2. **Add Birds** to the cart, where the total cost and potential discounts will be calculated.
3. **Earn Bonus Items** as the cart total increases, making each adoption more rewarding.
4. **Complete Checkout** to adopt the birds. A modal will confirm the adoption, and the cart will reset after submission.

## Live Demo

Try the app here: [SkyHaven Sanctuary](https://skyhavensanctuary.netlify.app/)


## Project Structure and Data Management

- **Data Storage**: Bird data and bonus items are stored in separate JavaScript files (`birds.js` and `bonusItems.js`), ensuring a clear separation between data and application logic.
- **State Management with React**: React state is used extensively for managing cart items, discounts, and dynamic data updates.
- **Responsive Styling with Bootstrap**: Bootstrap is integrated for a responsive, visually appealing layout, providing a seamless experience on both desktop.

## Technologies Used

- **React**: For building a responsive and interactive user interface.
- **Bootstrap**: For consistent and responsive styling.
- **JavaScript (ES6+)**: Used throughout the project for logic and data handling.
- **CSS**: For custom styling and animations.

## Compatibility

- **Website Page Fit**: This page is designed to fit well on standard web displays but is not optimized for mobile devices.
- **Supported Browser**: Works on Chrome. Compatibility with other browsers may vary.

## Future Features
1. **Integration with Adoption API**: Implement an adoption API integration that links displayed birds to real-life adoptable birds. This feature would enable users to explore detailed information and initiate the adoption process directly within the app interface. While users can simulate the adoption experience on the app, final adoption transactions and processes will be completed on the external website hosting the API, ensuring a smooth and connected experience.


2. **Enhanced User-Friendly UI**: Revamp the user interface to make it more intuitive and easy to navigate. The goal is to design the app so users can understand its purpose and functions at a glance, without needing external instructions or explanations.

3. **Personalized Adoption Recommendations**: Introduce a feature that suggests birds based on user preferences, such as bird type, size, or care requirements. This personalization would help users find the perfect match based on their lifestyle and adoption criteria.

