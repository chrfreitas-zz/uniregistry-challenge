const STORE_KEY = 'domains';

class Domain {
    static getAll(){
        const domains = JSON.parse(localStorage.getItem(STORE_KEY)) || [];

        if(domains.length){
            return domains;
        }

        return this.addAll();
    }

    static addAll(values = []){
        localStorage.setItem(STORE_KEY, JSON.stringify(values));
        return values;
    }

    static get(id) {
        const allDomains = this.getAll();
        const domain = allDomains.find(item => item.id === id);

        if(domain && domain.id === id){
            return domain;
        }

        return;
    }

    static add(value){
        const allDomains = this.getAll();
        const newDomains = [ ... allDomains, value];

        localStorage.setItem('domains', JSON.stringify(newDomains));

        return newDomains;
    }

    static update(id, value) {
        const domain = this.get(id);
        if(!domain){
            return false;
        }

        this.remove(id);
        const newDomain = { ...domain, value };
        this.add(newDomain);

        return true;
    }

    static remove(id){
        const newDomains = this.getAll().filter(item => item.id !== id);

        if(newDomains){
            this.addAll(newDomains);
            return true;
        }

        return false;
    }


}

export default Domain;