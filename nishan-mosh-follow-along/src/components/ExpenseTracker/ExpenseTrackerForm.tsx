import { FormEvent, useState } from "react";
import "./ExpenseTrackerForm.css";
import category from "./categories";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description should have minimum 3 characters" })
		.max(40, { message: "Description can have only upto 40 characters" }),
	amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01),
	category: z.enum(category, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseTrackerForm = ({ onSubmit }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<div>
			<form
				onSubmit={handleSubmit((data) => {
					onSubmit(data);
					reset();
				})}
			>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						{...register("description")}
						id="description"
						type="text"
						className="form-control"
					/>
					{errors.description && (
						<p className="text-danger">
							{errors.description.message}
						</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount
					</label>
					<input
						{...register("amount", { valueAsNumber: true })}
						id="amount"
						type="number"
						className="form-control"
					/>
					{errors.amount && (
						<p className="text-danger">{errors.amount.message}</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="select" className="form-label">
						Category
					</label>
					<select
						{...register("category")}
						id="select"
						className="form-select"
						aria-label="Select category"
					>
						<option defaultValue={category[0]}>
							Select category
						</option>
						{category.map((eachCategory) =>
							eachCategory ? (
								<option value={eachCategory} key={eachCategory}>
									{eachCategory}
								</option>
							) : null
						)}
					</select>
					{errors.category && (
						<p className="text-danger">{errors.category.message}</p>
					)}
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ExpenseTrackerForm;
