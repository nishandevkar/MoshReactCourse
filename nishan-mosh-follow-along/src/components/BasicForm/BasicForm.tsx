import "./BasicForm.css";
import { useForm, FieldValues } from "react-hook-form";
interface FormData {
	name: string;
	age: number;
}
const BasicForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

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
					{...register("name", { required: true, minLength: 3 })}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">The name is required</p>
				)}
				{errors.name?.type === "minLength" && (
					<p className="text-danger">
						The name should be 3 characters long
					</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", { required: true, min: 0, max: 117 })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age?.type === "required" && (
					<p className="text-danger">Age is required</p>
				)}
				{errors.age?.type === "min" && (
					<p className="text-danger">Age cannot be negative</p>
				)}
				{errors.age?.type === "max" && (
					<p className="text-warning">
						You are older than the current oldest person in the
						world, Congratulations
					</p>
				)}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit{" "}
			</button>
		</form>
	);
};

export default BasicForm;
