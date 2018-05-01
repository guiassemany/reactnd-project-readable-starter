const api = "http://localhost:3001";

const headers = {
    'Accept': 'application/json',
    'Authorization': 'any-token',
    'Content-Type': 'application/json'
}

export const create = (comment) => {
    return fetch(`${api}/comments`, {headers, body: JSON.stringify(comment)})
        .then(res => res.json());
}

export const getDetails = (id) => {
    return fetch(`${api}/comments/${id}`, {headers})
        .then(res => res.json());
}

export const voteComment = (id, option) => {
    return fetch(`${api}/comments/${id}`, {method: 'post', headers, body: JSON.stringify({option})})
        .then(res => res.json());
}

export const editComment = (id, comment) => {
    return fetch(`${api}/comments/${id}`, {method: 'put', headers, body: JSON.stringify(comment)})
        .then(res => res.json());
}


