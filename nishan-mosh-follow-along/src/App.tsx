// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";

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
			description: "Netflix",
			amount: 12,
			category: "Entertainment",
		},
		{
			id: 3,
			description: "Electricity",
			amount: 250,
			category: "Utilities",
		},
	]);
	if (expenseList.length === 0) return null;
	return (
		<div>
			{/* <ExpenseTrackerForm></ExpenseTrackerForm> */}
			<ExpenseList
				expenses={expenseList}
				onDelete={(id) =>
					setExpenseList(expenseList.filter((e) => e.id != id))
				}
			></ExpenseList>
		</div>
	);
}
export default App;
