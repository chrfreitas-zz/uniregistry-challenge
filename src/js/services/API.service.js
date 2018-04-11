
import Domain from '../classes/Domain.class';

class API {
    static getDomains() {
        return fetch('src/data/domains.json').then(response => response.json());
    }

    static getDomain(id) {
        return new Promise(resolve => {
            const domain = Domain.get(id);

            if(domain){
                return resolve(domain);
            }

            return fetch(`src/data/${id}.json`)
                    .then(response => response.json())
                    .then(data => {
                        Domain.add(data);
                        resolve(data);
                    });
        });
    }
}

export default API;