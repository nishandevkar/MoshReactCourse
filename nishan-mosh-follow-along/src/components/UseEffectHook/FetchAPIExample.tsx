import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface Comments {
	body?: string;
	email?: string;

	name: string;

	id: number;
	postId: number;
}
const FetchAPIExample = () => {
	const [comments, setComments] = useState<Comments[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoader] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoader(true);
		axios
			.get<Array<Comments>>(
				"https://jsonplaceholder.typicode.com/comments",
				{ signal: controller.signal }
			)
			.then((response) => {
				setLoader(false);
				setComments(response.data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);
	return (
		<>
			{isLoading && <div className="spinner-border"></div>}
			<p className="text-danger">{error}</p>
			<div>
				<ul>
					{comments.map((data) => (
						<li key={data.name}>{data.name}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default FetchAPIExample;
