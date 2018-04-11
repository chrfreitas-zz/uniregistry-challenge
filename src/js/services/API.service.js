import axios from 'axios';

class API {
    static getDomains() {
        return axios.get('src/data/domains.json');
    }

    static getDomain(id) {
        return axios.get(`src/data/${id}.json`);
    }
}

export default API;