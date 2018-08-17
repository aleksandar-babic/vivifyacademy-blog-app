import axios from 'axios'

export default class Posts {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll() {
    return axios.get('posts?filter={"include":["comments"]}')
  }

  get(id) {
    return axios.get(`posts/${id}?filter={"include":["comments"]}`)
  }

  add(post) {
    return axios.post('posts', post)
  }

  update(post) {
    return axios.put(`posts/${post.id}`, post)
  }

  remove(id) {
    return axios.delete(`posts/${id}`)
  }

  addComment(comment, postId) {
    return axios.post(`posts/${postId}/comments`, comment)
  }
}

export const posts = new Posts()