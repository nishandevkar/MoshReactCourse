import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService from "../services/user-service";
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
		setLoader(true);
		const { request, cancel } = userService.getAllComments();
		request
			.then((response) => {
				setLoader(false);
				setComments(response.data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => cancel();
	}, []);

	const deleteComment = (comment: Comments) => {
		const originalComments = [...comments];
		setComments(comments.filter((comm) => comment.name !== comm.name));
		userService.deleteComment(comment.id).catch((err) => {
			setError(err.message);
			setComments(originalComments);
		});
	};

	const addComment = () => {
		const originalComments = [...comments];
		const newComment = {
			body: "Comment Body",
			email: "emailExample@example.com",
			name: "Nishan Devkar",
			id: 0,
			postId: 0,
		};
		setComments([newComment, ...comments]);
		userService
			.postComment(newComment)
			.then(({ data: savedComment }) =>
				setComments([savedComment, ...comments])
			)
			.catch((err) => {
				setError(err.message);
				setComments(originalComments);
			});
	};

	const updateComment = (comment: Comments) => {
		const originalComments = [...comments];
		const updatedComment = {
			...comment,
			name: comment.name.includes(" Nishan's update")
				? comment.name
				: comment.name + " Nishan's update",
		};

		setComments(
			comments.map((comm) =>
				comm.id === comment.id ? updatedComment : comm
			)
		);
		userService.updateComment(updatedComment).catch((err) => {
			setError(err.message);
			setComments(originalComments);
		});
	};
	return (
		<>
			{isLoading && <div className="spinner-border"></div>}
			<p className="text-danger">{error}</p>
			<div>
				<div className="btn btn-primary mb-2" onClick={addComment}>
					Add
				</div>

				<ul className="list-group">
					{comments.map((data) => (
						<li
							key={data.name}
							className="list-group-item d-flex justify-content-between"
						>
							{data.name}
							<div className="buttons-container">
								<div
									className="btn btn-outline-secondary mb-2"
									onClick={() => updateComment(data)}
								>
									Update
								</div>
								<div
									className="btn btn-outline-danger mx-1 mb-2"
									onClick={() => deleteComment(data)}
								>
									Delete
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default FetchAPIExample;
