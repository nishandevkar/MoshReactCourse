// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import Dropdown from "./components/ExpenseTracker/Dropdown/Dropdown";
import ExpenseTrackerForm from "./components/ExpenseTracker/ExpenseTrackerForm";
import expensesCategory from "./components/ExpenseTracker/categories";

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

	const filteredExpenseList =
		selectedCategory != "All Categories"
			? expenseList.filter(
					(expense) => expense.category === selectedCategory
			  )
			: expenseList;
	return (
		<>
			<div>
				<ExpenseTrackerForm
					onSubmit={(data) =>
						setExpenseList([
							...expenseList,
							{ ...data, id: expenseList.length + 1 },
						])
					}
				></ExpenseTrackerForm>
				<Dropdown
					dropdownItems={[...expensesCategory]}
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
			</div>
		</>
	);
}
export default App;
