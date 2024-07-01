import "./BasicForm.css";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z
		.number({ invalid_type_error: "Age is required" })
		.min(0, { message: "Age must be greater than 0" })
		.max(117, {
			message:
				"You are older than the current oldest person in the world, congratulations",
		}),
});
type FormData = z.infer<typeof schema>;
const BasicForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && (
					<p className="text-danger">{errors.name.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age && (
					<p className="text-danger">{errors.age.message}</p>
				)}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit{" "}
			</button>
		</form>
	);
};

export default BasicForm;
