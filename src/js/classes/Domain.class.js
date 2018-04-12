import API from '../services/API.service';

const STORE_KEY = 'domains';

class Domain {
    constructor() {
        this.id = '';
        this.description = '';
        this.email = '';
        this.price = '';
    }

    static load(){
        return new Promise(resolve => API.getDomains().then(response => {
            this.addAll(response.data.domains);
            resolve(response.data.domains);
        }));
    }

    static getAll() {
        const domains = JSON.parse(localStorage.getItem(STORE_KEY));

        if(domains){
            return domains;
        }

        return [];
    }

    static addAll(values = []){
        localStorage.setItem(STORE_KEY, JSON.stringify(values));
        return true;
    }

    static get(id) {
        return new Promise(resolve => {
            const domain = this.getAll().find(item => item.id === id);

            if(domain && domain.id === id && domain.email){
                return resolve(domain);
            }

            return API.getDomain(id).then(response => {
                this.update(response.data);
                resolve(response.data);
            });
        });
    }

    static add(value){
        if(!value) {
            return false;
        }

        const newDomains = [ ...this.getAll(), value];
        localStorage.setItem(STORE_KEY, JSON.stringify(newDomains));
        return true;
    }

    static update(value = {}) {
        if(value.id && this.remove(value.id)){
            return this.add(value);
        }

        return false;
    }

    static remove(id){
        if(!id) {
            return false;
        }

        const newDomains = this.getAll().filter(item => item.id !== id);

        if(newDomains){
            this.addAll(newDomains);
            return true;
        }

        return false;
    }

    static clear() {
        localStorage.removeItem(STORE_KEY);
        return true;
    }
}

export default Domain;