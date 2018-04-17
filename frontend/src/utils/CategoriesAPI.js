const api = "http://localhost:3001";

const headers = {
    'Accept': 'application/json',
    'Authorization': 'any-token'
}

export const getAll = () => {
    return fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(res => res.categories);
}

export const getPostFromCategory = (category) => {
    return fetch(`${api}/${category}/posts`, {headers}).then(res => res.json());
}
