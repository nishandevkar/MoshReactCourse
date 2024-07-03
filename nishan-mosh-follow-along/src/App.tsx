// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import Dropdown from "./components/ExpenseTracker/Dropdown/Dropdown";

// import ExpenseTrackerForm from "./components/ExpenseTracker/ExpenseTrackerForm";

function App() {
	const [expenseList, setExpenseList] = useState([
		{
			id: 1,
			description: "Milk",
			amount: 20,
			category: "Groceries",
		},
		{
			id: 2,
			description: "Bananas",
			amount: 9,
			category: "Groceries",
		},
		{
			id: 3,
			description: "Netflix",
			amount: 12,
			category: "Entertainment",
		},
		{
			id: 4,
			description: "Disney+",
			amount: 14,
			category: "Entertainment",
		},
		{
			id: 5,
			description: "Electricity",
			amount: 250,
			category: "Utilities",
		},
	]);
	if (expenseList.length === 0) return null;
	const [selectedCategory, setSelectedCategory] = useState("All Categories");
	const expensesCategory = [
		"All Categories",
		"Groceries",
		"Entertainment",
		"Utilities",
	];
	const filteredExpenseList =
		selectedCategory != "All Categories"
			? expenseList.filter(
					(expense) => expense.category === selectedCategory
			  )
			: expenseList;
	return (
		<>
			<div>
				<Dropdown
					dropdownItems={expensesCategory}
					onSelectCategory={(event) => {
						setSelectedCategory(event);
					}}
					selectedCategory={selectedCategory}
				></Dropdown>
				<ExpenseList
					expenses={filteredExpenseList}
					onDelete={(id) =>
						setExpenseList(
							filteredExpenseList.filter((e) => e.id != id)
						)
					}
				></ExpenseList>
				<p>{selectedCategory}</p>
			</div>
		</>
	);
}
export default App;
