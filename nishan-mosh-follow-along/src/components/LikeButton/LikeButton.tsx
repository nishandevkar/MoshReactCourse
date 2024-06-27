import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const LikeButton = () => {
	const [likedStatus, setLikedStatus] = useState(true);
	const toggle = () => setLikedStatus(!likedStatus);

	return (
		<div onClick={toggle}>
			{likedStatus ? (
				<AiFillHeart size={40} color="#FF033E" />
			) : (
				<AiOutlineHeart size={40} />
			)}
		</div>
	);
};

export default LikeButton;
