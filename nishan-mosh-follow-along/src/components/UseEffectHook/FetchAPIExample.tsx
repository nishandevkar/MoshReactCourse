import axios, { AxiosError } from "axios";
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
	useEffect(() => {
		const getCommentResponse = async () => {
			try {
				const res = await axios.get<Array<Comments>>(
					"https://jsonplaceholder.typicode.com/comments"
				);
				setComments(res.data);
			} catch (err) {
				setError((err as AxiosError).message);
			}
		};
		getCommentResponse();
		// .then((response) => setComments(response.data))
		// .catch((err) => setError(err.message));
	}, []);
	return (
		<>
			<p>{error}</p>
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
