# SpendWise Dashboard

## Week 6 Assignment — Build the JavaScript Foundation for SpendWise

SpendWise is a personal budgeting dashboard designed to help users manage their budget and expenses.

In Week 6, JavaScript was added to the SpendWise project to make the application process budgeting information, collect user input, perform calculations, and display results.

## Project Files

* `index.html` — Contains the structure of the SpendWise webpage.
* `style.css` — Contains the styling and responsive design of the dashboard.
* `script.js` — Contains the JavaScript logic for collecting input, storing data, performing calculations, and displaying results.
* `README.md` — Contains information about the project and the JavaScript concepts implemented.

## What SpendWise Does

SpendWise allows users to enter their monthly budget and an expense. The application processes the information and calculates the remaining balance.

For example:

* Monthly Budget: KES 50,000
* Expense: KES 5,000
* Remaining Balance: KES 45,000

The calculated results are displayed in the browser console.

## JavaScript Concepts Implemented

The following JavaScript concepts were implemented:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* Console output

## Variables

Variables are used to store important budgeting and expense information.

Examples include:

```javascript
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
let expenseName = "";
let expenseAmount = 0;
let expenseCategory = "";
```

The `budget` variable stores the user's budget.

The `totalExpenses` variable stores the amount spent.

The `remainingBalance` variable stores the amount remaining after expenses.

The expense variables store the expense name, amount, and category.

## User Input

User input is collected using the JavaScript `prompt()` function.

For example:

```javascript
budget = Number(prompt("Enter your monthly budget in KES:"));
```

The user enters their budget through the prompt.

The application also asks for:

* Expense name
* Expense amount
* Expense category

The `Number()` function converts numeric input into a number so that calculations can be performed.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

The calculation is:

```text
Remaining Balance = Budget - Total Expenses
```

The calculation is implemented using the following function:

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

For example:

```text
Budget = KES 50,000
Expenses = KES 5,000

Remaining Balance = KES 45,000
```

## Functions

Functions help organize the JavaScript code into reusable sections.

SpendWise uses a function to calculate the remaining balance:

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

Another function is used to display the budget results:

```javascript
function displayBudgetResults(budget, expenses, remaining) {
    console.log("Budget: KES " + budget);
    console.log("Total Expenses: KES " + expenses);
    console.log("Remaining Balance: KES " + remaining);
}
```

Using functions makes the code easier to organize, understand, and reuse.

## Console Output

The calculated results are displayed in the browser console using `console.log()`.

Example output:

```text
========== SpendWise Budget Summary ==========
Budget: KES 50000
Total Expenses: KES 5000
Remaining Balance: KES 45000
==============================================
Expense Name: Food
Expense Category: Food
Expense Amount: KES 5000
```

## Testing

The application was tested by entering different budget and expense values through the JavaScript prompts.

The tests confirmed that:

* User input is collected successfully.
* Budget values are stored correctly.
* Expense values are stored correctly.
* The remaining balance is calculated correctly.
* Results are displayed clearly in the browser console.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Visual Studio Code
* GitHub

## Conclusion

The Week 6 JavaScript implementation transforms SpendWise from a visual dashboard into an application that can collect data, process budgeting information, perform calculations, and display results using JavaScript.
