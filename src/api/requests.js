import { url, posts, comments } from "./constants";

class API {
  getAllPosts = async () =>
    fetch(`${url}${posts}`).then(res => {
      if (res.ok) {
        return res.json();
      }
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
}

export default new API();
