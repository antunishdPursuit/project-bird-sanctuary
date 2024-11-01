
# Bird Sanctuary

## Assessment Details

Create a bird sanctuary donation app that meets the user stories below.

**The birds are in the array in `src/data/birds.js` and the bonus itesms are in `src/data/bonusItems.js`. **

## User Stories

1. I can see sections with birds, that have a name, image, amount and adopt button.
1. I can add birds to the shopping cart.
1. I can see a total cost of the birds in my cart.
1. I can get a 10% discount if I have 3 or more birds in my cart
1. I can get a series of bonus items for increasing cart totals
1. I can use a form to checkout my cart, upon checkout, it resets my cart
1. I can delete a bird from my cart


### Birds

- The bird data comes from `src/data/birds.js`
- Each bird card displays the name, image, and amount (price)
- Each bird card has a class name of `card`
- Each bird card has an `Adopt` button
  - The button text should be: `Adopt`

### Cart

- The cart has a class name of `Cart`
- When I click on a bird card's adopt button, its name appears in the cart as an `<ol>` list item.
- The total shows up as an `<h4>` element inside the cart
- When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
- When there are less than 3 birds in the cart there is a 0% discount
- When there are 3 or more birds in the cart there is a 10% discount

The bonuses come from `src/data/bonusItems.js`

- The bonus items are added as list items in an `<ul>` list item as follows:
- 1 bonus (first array item) is given if the total is between 100 and 300
- 2 bonuses (first and second array items) are given if the total is between 300 and 500
- 3 bonuses are given if the total is between 500 and 1000
- 4 bonuses are given if the total is more than 1000

### Checkout

- I can complete the inputs in the checkout form.
- When I complete the form with valid input and click `Submit`, an alert tells me the purchase was successful.
  - Alert text should include: `You have adopted birds. Thank you!`
- When I close the alert box, the cart component should fully reset (no birds, no discount, total = 0, no bonus items listed)

