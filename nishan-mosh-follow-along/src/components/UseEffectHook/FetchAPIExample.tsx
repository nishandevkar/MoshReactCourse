import axios from "axios";
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
	useEffect(() => {
		axios
			.get<Array<Comments>>(
				"https://jsonplaceholder.typicode.com/comments"
			)
			.then((response) => setComments(response.data));
	}, []);
	return (
		<div>
			<ul>
				{comments.map((data) => (
					<li key={data.name}>{data.name}</li>
				))}
			</ul>
		</div>
	);
};

export default FetchAPIExample;
