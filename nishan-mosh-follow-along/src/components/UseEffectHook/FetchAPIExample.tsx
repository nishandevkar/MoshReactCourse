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

	const deleteComment = (comment: Comments) => {
		const originalComments = [...comments];
		setComments(comments.filter((comm) => comment.name !== comm.name));
		axios
			.delete(
				"https://jsonplaceholder.typicode.com/comments/" + comment.id
			)
			.catch((err) => {
				setError(err.message);
				setComments(originalComments);
			});
	};
	return (
		<>
			{isLoading && <div className="spinner-border"></div>}
			<p className="text-danger">{error}</p>
			<div>
				<ul className="list-group">
					{comments.map((data) => (
						<li
							key={data.name}
							className="list-group-item d-flex justify-content-between"
						>
							{data.name}
							<div
								className="btn btn-outline-danger"
								onClick={() => deleteComment(data)}
							>
								Delete
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default FetchAPIExample;
