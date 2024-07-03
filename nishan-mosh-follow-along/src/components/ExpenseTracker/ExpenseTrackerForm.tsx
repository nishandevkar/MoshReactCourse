import { FormEvent, useState } from "react";
import "./ExpenseTrackerForm.css";
import ExpenseList from "./ExpenseList";
const ExpenseTrackerForm = () => {
	const [formComponentValues, setFormComponentValues] = useState([
		{
			id: 1,
			description: "",
			amount: 0,
			category: "",
		},
	]);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(formComponentValues);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						value={formComponentValues[0].description}
						id="description"
						type="text"
						className="form-control"
						onChange={(e) =>
							setFormComponentValues([
								...formComponentValues,
								{
									...formComponentValues[0],
									description: e.target.value,
								},
							])
						}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount
					</label>
					<input
						value={formComponentValues[0].amount}
						id="amount"
						type="number"
						className="form-control"
						onChange={(e) =>
							setFormComponentValues([
								...formComponentValues,
								{
									...formComponentValues[0],
									amount: parseInt(e.target.value),
								},
							])
						}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="select" className="form-label">
						Category
					</label>
					<select
						value={formComponentValues[0].category}
						id="select"
						className="form-select"
						aria-label="Select category"
						onChange={(e) => {
							setFormComponentValues([
								...formComponentValues,
								{
									...formComponentValues[0],
									category: e.target.value,
								},
							]);
						}}
					>
						<option defaultValue={"Select Category"}>
							Select category
						</option>
						<option value="Groceries">Groceries</option>
						<option value="Utilities">Utilities</option>
						<option value="Entertainment">Entertainment</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<ExpenseList
				expenses={formComponentValues}
				onDelete={() => console.log(null)}
			></ExpenseList>
		</div>
	);
};

export default ExpenseTrackerForm;
