import {makeid} from "./Helpers"

const api = "http://localhost:3001";

const headers = {
    'Accept': 'application/json',
    'Authorization': 'any-token',
    "Content-Type": "application/json",
}

export const getAll = () => {
    return fetch(`${api}/posts`, {headers})
        .then(res => res.json());
}

export const create = (post) => {
    post.id = makeid()
    post.timestamp = + new Date()
    return fetch(`${api}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers
    }).then(res => res.json());
}

export const getPostDetails = (id) => {
    return fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json());
}

export const votePost = (id, option) => {
    return fetch(`${api}/posts/${id}`, {method: 'post', headers, body: JSON.stringify({option})})
        .then(res => res.json());
}

export const editPost = (id, post) => {
    return fetch(`${api}/posts/${id}`, {method: 'put', headers, body: JSON.stringify(post)})
        .then(res => res.json());
}

export const deletePost = (id) => {
    return fetch(`${api}/posts/${id}`, {method: 'delete', headers})
        .then(res => res.json());
}

export const getCommentsForPost = (id) => {
    return fetch(`${api}/posts/${id}/comments`, {headers})
        .then(res => res.json());
}
