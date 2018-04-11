import API from '../services/API.service';

const STORE_KEY = 'domains';

class Domain {

    static load(){
        return new Promise(resolve => API.getDomains().then(data => {
            this.addAll(data.domains);
            resolve(data.domains);
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

            return API.getDomain(id).then(data => {
                this.update(data);
                resolve(data);
            });
        });
    }

    static add(value){
        const newDomains = [ ... this.getAll(), value];
        localStorage.setItem(STORE_KEY, JSON.stringify(newDomains));
        return true;
    }

    static update(value) {
        if(value.id && this.remove(value.id)){
            return this.add(value);
        }

        return false;
    }

    static remove(id){
        const newDomains = this.getAll().filter(item => item.id !== id);

        if(newDomains){
            this.addAll(newDomains);
            return true
        }

        return false;
    }

    static clear() {
        localStorage.removeItem(STORE_KEY);
    }
}

export default Domain;