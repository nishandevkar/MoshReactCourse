import apiClient from "./api-client";
export interface Comments {
	body?: string;
	email?: string;

	name: string;

	id: number;
	postId: number;
}
class UserService{
    getAllComments(){
        const controller = new AbortController();
        const request = apiClient.get<Array<Comments>>("/comments", { signal: controller.signal })
        return {request, cancel: ()=> controller.abort()}
}
    postComment(newComment:Comments){
        return apiClient.post("/comments/", newComment)
    }
    deleteComment(id: number){
        return apiClient.delete("/comments/" + id)
    }
    updateComment(updatedComment:Comments){
        return apiClient.patch("/comments/" + updatedComment.id, updatedComment)
    }
}


export default new UserService();