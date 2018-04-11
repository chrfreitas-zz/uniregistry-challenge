
class API {
    static getDomains() {
        return fetch('src/data/domains.json').then(response => response.json());
    }

    static getDomain(id) {
        return fetch(`src/data/${id}.json`).then(response => response.json());
    }
}

export default API;