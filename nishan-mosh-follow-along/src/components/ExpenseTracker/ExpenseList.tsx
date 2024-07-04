interface ExpenseListProps {
	id: number;
	description: string;
	amount: number;
	category: string;
}
interface ExpenseArray {
	expenses: ExpenseListProps[];
	onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: ExpenseArray) => {
	return (
		<div className="m-5">
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.category}</td>
							<td>
								<button
									className="btn btn-outline-danger"
									onClick={() => onDelete(expense.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>
							<strong>
								$
								{expenses.reduce(
									(acc, expense) => acc + expense.amount,
									0
								)}
							</strong>
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseList;
