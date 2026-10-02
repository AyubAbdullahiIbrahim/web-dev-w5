
// ========================================
// SpendWise - Week 6 JavaScript Foundation
// ========================================

// 1. Application data

let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Example expense data
let expenseName = "";
let expenseAmount = 0;
let expenseCategory = "";


// ========================================
// 2. Functions
// ========================================

// Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Function to display the budget information
function displayBudgetResults(budget, expenses, remaining) {
    console.log("========== SpendWise Budget Summary ==========");
    console.log("Budget: KES " + budget);
    console.log("Total Expenses: KES " + expenses);
    console.log("Remaining Balance: KES " + remaining);
    console.log("==============================================");
}


// ========================================
// 3. Collect user input
// ========================================

// Ask the user for their budget
budget = Number(prompt("Enter your monthly budget in KES:"));

// Ask the user for one expense
expenseName = prompt("Enter the expense name:");

expenseAmount = Number(prompt("Enter the expense amount in KES:"));

expenseCategory = prompt("Enter the expense category:");


// ========================================
// 4. Perform calculations
// ========================================

// Store the expense amount
totalExpenses = expenseAmount;

// Calculate remaining balance
remainingBalance = calculateRemainingBalance(
    budget,
    totalExpenses
);


// ========================================
// 5. Display results in the console
// ========================================

displayBudgetResults(
    budget,
    totalExpenses,
    remainingBalance
);

console.log("Expense Name: " + expenseName);
console.log("Expense Category: " + expenseCategory);
console.log("Expense Amount: KES " + expenseAmount);

