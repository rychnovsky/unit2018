import request from './utils/request'

const API_HOST = 'http://zwa.web-rychnovsky.com/wp-json/wp/v2'

function api(url, options) {
  return request(`${API_HOST}${url}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export function getAllPosts() {
  return api('/posts', {
    method: 'GET',
  })
}

export function getPost(id) {
  return api(`/posts/${id}`, {
    method: 'GET',
  })
}
