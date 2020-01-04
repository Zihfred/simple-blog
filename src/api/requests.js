import { url, posts, comments, postComments } from "./constants";

class API {
  getAllPosts = async () =>
    fetch(`${url}${posts}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something was wrong");
    });

  deletePost = async id =>
    fetch(`${url}${posts}/${id}`, { method: "DELETE" }).then(res => {
      if (!res.ok) {
        throw new Error("Something was wrong");
      }
    });

  getPostById = async id =>
    fetch(`${url}${posts}/${id}${comments}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    });

  postComment = async (id, body) => {
    return fetch(`${url}${postComments}`, {
      headers: {
        'content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({"postId": id, body})
    });
  }
}

export default new API();
